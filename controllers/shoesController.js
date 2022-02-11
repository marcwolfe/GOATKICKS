const express = require('express')
const shoes = express.Router()
const Shoes = require('../models/shoesModel')

// GET (index) list of shoes
shoes.get('/', (req, res) => {
    Shoes.find({}, (error, foundShoes) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(200).json(foundShoes)
      }
    })
  })

  
  // POST create a Shoe
  shoes.post('/', (req, res) => {
    Shoes.create(req.body, (error, createdShoes) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(200).json(createdShoes)
      }
    })
  })
  
  // DELETE delete a shoe
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
  
  // UPDATE update a shoe
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
  
