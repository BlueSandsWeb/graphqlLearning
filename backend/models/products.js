const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProductSchema = new Schema({
  // _id: {
  //   // ObjectId
  //   required: true,
  // },
  name: {
    // string
    type: String,
    required: true,
  },
  ingredients: {
    // array of strings
    type: String,
    required: true,
  },
  gender: {
    // string
    type: String,
  },
  skinType: {
    // string
    type: String,
  },
  manufacturer: {
    // string
    type: String,
  },
  Scent: {
    // string
    type: String,
  },
  Brand: {
    // string
    type: String,
  },
});

module.exports = Product = mongoose.model("products", ProductSchema);
