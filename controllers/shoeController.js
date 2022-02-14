const express = require('express')
const shoes = express.Router()
const Shoe = require('../models/shoe')

// GET (index) list of bars
shoes.get('/', (req, res) => {
  Shoe.find({}, (error, foundShoes) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(200).json(foundShoes)
    }
  })
})

// POST create a bar
shoes.post('/', (req, res) => {
  Shoe.create(req.body, (error, createdShoe) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(200).json(createdShoe)
    }
  })
})

// DELETE delete a bar
shoes.delete('/:id', (req, res) => {
  Shoe.findByIdAndDelete(req.params.id, (error, deletedShoe) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else if (deletedShoe === null) {
      res.status(404).json({ message: 'Shoe id not Found'})
    } else {
      res.status(200).json({ message: `Shoe ${deletedShoe.name} deleted successfully`})
    }
  })
})

// UPDATE update a bar
shoes.put('/:id', (req, res) => {
  Shoe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedShoe) => {
    if (error) {
      res.status(400).json( {error: error.message })
    } else {
      res.status(200).json({
        message: `Shoe ${updatedShoe.id} updated successfully`,
        data: updatedShoe
      })
    }
  })
})

module.exports = shoes