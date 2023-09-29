const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.readAllUsers);
usersRouter.get('/:id', usersController.readUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;
