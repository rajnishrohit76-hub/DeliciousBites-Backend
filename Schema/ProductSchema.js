const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id : Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  ratings: Number,
  category: String,
}, { timestamps: true });


module.exports = ProductSchema;