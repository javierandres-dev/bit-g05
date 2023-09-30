const TaskModel = require('../models/tasksModel');

const TasksController = {
  createTask: async (req, res) => {
    try {
      const newTaks = new TaskModel({
        name: req.body.name,
        completed: false,
      });
      const createdTask = await newTaks.save();
      if (createdTask) res.json({ createdTask: createdTask._id });
      else throw new Error('task not created');
    } catch (error) {
      res.json({ error: 'An error occurred creating the task' });
    }
  },
  readTasks: async (req, res) => {
    try {
      const allTasks = await TaskModel.find();
      res.json({ allTasks });
    } catch (error) {
      res.json({ error: 'An error occurred reading the tasks' });
    }
  },
  readTask: async (req, res) => {
    try {
      const task = await TaskModel.findById(req.params.id);
      if (task) res.json({ task: task._id });
      else throw new Error('task not found');
    } catch (error) {
      res.json({ error: 'An error occurred reading the task' });
    }
  },
  updateTask: async (req, res) => {
    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updatedTask) res.json({ updatedTask: updatedTask._id });
      else throw new Error('task not found');
    } catch (error) {
      res.json({ error: 'An error occurred updating the task' });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
      if (deletedTask) res.json({ deletedTask: deletedTask._id });
      else throw new Error('task not found');
    } catch (error) {
      res.json({ error: 'An error occurred deleting the task' });
    }
  },
};

module.exports = TasksController;
