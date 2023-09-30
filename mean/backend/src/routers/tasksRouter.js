const { Router } = require('express');
const tasksController = require('../controllers/tasksController');

const router = Router();

router.post('/', tasksController.createTask);
router.get('/', tasksController.readTasks);
router.get('/:id', tasksController.readTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
