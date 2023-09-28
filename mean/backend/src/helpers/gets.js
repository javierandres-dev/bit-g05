const jwt = require('jsonwebtoken');

function getToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) {
          reject({ err });
        } else {
          resolve({ token });
        }
      }
    );
  });
}

module.exports = getToken;
