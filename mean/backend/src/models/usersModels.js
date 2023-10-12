const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('UserModel', userSchema);
