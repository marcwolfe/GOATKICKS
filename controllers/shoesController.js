const express = require('express')
const shoes = express.Router()
const Shoes = require('../models/shoesModel')

// GET (index) list of bars
shoes.get('/', (req, res) => {
    Bar.find({}, (error, foundShoes) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(200).json(foundShoes)
      }
    })
  })
  
  // POST create a bar
  shoes.post('/', (req, res) => {
    Shoes.create(req.body, (error, createdShoes) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(200).json(createdShoes)
      }
    })
  })
  
  // DELETE delete a bar
  shoes.delete('/:id', (req, res) => {
    Shoes.findByIdAndDelete(req.params.id, (error, deletedShoes) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else if (deletedShoes === null) {
        res.status(404).json({ message: 'Shoe id not Found'})
      } else {
        res.status(200).json({ message: `Shoe ${deletedShoes.name} deleted successfully`})
      }
    })
  })
  
  // UPDATE update a bar
  shoes.put('/:id', (req, res) => {
    Shoes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedShoes) => {
      if (error) {
        res.status(400).json( {error: error.message })
      } else {
        res.status(200).json({
          message: `Shoe ${updatedShoes.id} updated successfully`,
          data: updatedShoes
        })
      }
    })
  })
  
  // PATCH -- increments number of likes
  shoes.patch('/addlikes/:id', (req, res) => {
    Shoes.findByIdAndUpdate(req.params.id, { $inc: {likes: 1}}, {new:true}, (error, updatedShoes) => {
      if(error) {
        res.status(400).json({error: error.message})
      } else {
        res.status(200).json({data: updatedShoes})
      }
    })
  })
  
  module.exports = shoes
  
