const { v4: uuidv4 } = require('uuid');
const admin = require('firebase-admin');
const sharp = require('sharp');

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://battlegrid-c3f07.appspot.com',
});

const bucket = admin.storage().bucket();

exports.uploadImageFirebase = async (req, res, next) => {
  if (!req.file) {
    return next(new Error('No image file provided'));
  }

  // Resize image using Sharp
  const resizedImageBuffer = await sharp(req.file.buffer).resize({ width: 500, height: 500 }).toBuffer();

  const metadata = {
    metadata: {
      firebaseStorageDownloadTokens: uuidv4(),
    },
    contentType: 'image/jpg',
    cacheControl: 'public, max-age=31536000',
  };

  // Upload resized image buffer to Firebase Storage
  const file = bucket.file(`users/user-${req.user.id}-${Date.now()}.jpg`);

  const stream = file.createWriteStream({
    metadata: metadata,
    resumable: false,
  });

  stream.on('error', (err) => {
    next(err);
  });

  stream.on('finish', () => {
    req.imageUrl = `https://firebasestorage.googleapis.com/v0/b/battlegrid-c3f07.appspot.com/o/users%2F${file.name.split('/')[1]}?alt=media`;
    next();
  });

  stream.end(resizedImageBuffer);
};
