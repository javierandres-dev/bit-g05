const bcrypt = require('bcryptjs');
const UserModel = require('../models/usersModels');
const getToken = require('../helpers/gets');

const loginController = {
  loginUser: async (request, response) => {
    try {
      const { email, password } = request.body;
      const userFound = await UserModel.findOne({ email });
      if (userFound) {
        const isValidPassword = await bcrypt.compare(
          password,
          userFound.password
        );
        if (isValidPassword) {
          const token = await getToken({
            id: userFound._id,
            name: userFound.name,
          });
          response.json(token);
        } else {
          response.json({ message: 'Invalid credentials.' });
        }
      } else {
        response.json({ message: 'Invalid credentials.' });
      }
    } catch (error) {
      response.json({ message: 'Fail during login user!' });
    }
  },
};

module.exports = loginController;
