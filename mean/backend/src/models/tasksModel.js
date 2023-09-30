const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('Task', taskSchema);
