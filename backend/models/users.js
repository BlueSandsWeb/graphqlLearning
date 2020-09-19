const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UsersSchema = new Schema({
  // _id: {
  //   // ObjectId
  //   required: true,
  // },
  username: {
    // string
    type: String,
    required: true,
  },
  password: {
    // string
    type: String,
    required: true,
  },
  allergies: {
    // array of strings
    type: Array,
  },
});

module.exports = Product = mongoose.model("users", UsersSchema);
