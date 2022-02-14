const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  price: {type: Number, required: true},
  size: {type: Number, required: true},
  countInStock: {type: Number, required: true},
  imgUrl: {type: String, required: true},
})

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;