const storage = firebase.storage();

storage
  .ref('image.jpg')
  .getDownloadURL()
  .then((url) => {
    // Do something with the URL ...
  });
