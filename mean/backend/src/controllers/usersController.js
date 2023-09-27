const UserModel = require('../models/usersModels');

const usersController = {
  createUser: async (request, response) => {
    //console.log(request.body);
    const newUser = new UserModel(request.body);
    //console.log(newUser);
    const userCreated = await newUser.save();
    //console.log(userCreated);
    response.json({
      message: `Success! User created with id: ${userCreated._id}`,
    });
  },
  readAllUsers: (request, response) => {
    response.json({ message: 'read all users...' });
  },
  readUser: (request, response) => {
    response.json({ message: 'read user...' });
  },
  updateUser: (request, response) => {
    response.json({ message: 'update user...' });
  },
  deleteUser: (request, response) => {
    response.json({ message: 'delete user...' });
  },
};

module.exports = usersController;
