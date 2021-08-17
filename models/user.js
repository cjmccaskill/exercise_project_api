const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // trims whitespace off the end
      minlength: 3,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
