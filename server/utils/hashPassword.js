const bcrypt = require('bcrypt');
const saltRounds = 12;

exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

exports.checkPassword = async (candidatePassword, userPassword) => {
  try {
    const match = await bcrypt.compare(candidatePassword, userPassword);

    return match;
  } catch (error) {
    console.log(error);
  }
};

exports.exclude = (user, keys) => {
  return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
};
