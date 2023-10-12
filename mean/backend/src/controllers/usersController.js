const bcrypt = require('bcryptjs');
const UserModel = require('../models/usersModels');
const getToken = require('../helpers/gets');

const usersController = {
  createUser: async (request, response) => {
    try {
      const { name, email, password, dateOfBirth } = request.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        name,
        email,
        password: hashPassword,
        dateOfBirth,
      });
      const createdUser = await newUser.save();
      const token = await getToken({
        id: createdUser._id,
        name: createdUser.name,
      });
      response.json(token);
    } catch (error) {
      response.json({ message: 'Fail during create user!' });
    }
  },
  readAllUsers: async (request, response) => {
    try {
      const allUsers = await UserModel.find();
      response.json({ allUsers });
    } catch (error) {
      response.json({ message: 'Fail during read all users!' });
    }
  },
  readUser: async (request, response) => {
    try {
      const user = await UserModel.findById(request.params.id);
      if (user) response.json({ user });
      else throw new Error('User not found.');
    } catch (error) {
      console.log(error);
      response.json({ error: error.message || 'Fail during read user!' });
    }
  },
  updateUser: async (request, response) => {
    try {
      const { name, email, password } = request.body;
      let updatedUser = null;
      if (password) {
        const hashPassword = await bcrypt.hash(password, 10);
        updatedUser = await UserModel.findByIdAndUpdate(request.params.id, {
          name,
          email,
          password: hashPassword,
        });
      } else {
        updatedUser = await UserModel.findByIdAndUpdate(request.params.id, {
          name,
          email,
        });
      }
      if (updatedUser) response.json({ updatedUser: updatedUser._id });
      else throw new Error('User not found.');
    } catch (error) {
      response.json({ error: error.message || 'Fail during update user!' });
    }
  },
  deleteUser: async (request, response) => {
    try {
      const userDeleted = await UserModel.findByIdAndDelete(request.params.id);
      if (userDeleted) response.json({ userDeleted: userDeleted._id });
      else throw new Error('User not found.');
    } catch (error) {
      response.json({ error: error.message || 'Fail during delete user!' });
    }
  },
};

module.exports = usersController;
