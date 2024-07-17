const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: String,
  lastname: String,
  price: Number,
  brand: String,
  category: String,
  

});

module.exports = mongoose.model("products", productschema);
