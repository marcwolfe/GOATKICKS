const mongoose = require('mongoose')
const {Schema, model} = mongoose

const shoesSchema = new Schema ({
  name: {type: String, require: true},
  likes: {type: Number, default: 0},
  size: {type: Number, default: 4},
  selectedFile: String
})

module.exports = model('Shoes', shoesSchema )