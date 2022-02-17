const express = require('express')
const shoes = express.Router()
const Shoe = require('../models/Shoe')

shoes.get('/seed', async (req, res) => {
  const newShoe =
    [
      {
        name: "Jordan 11's",
        color: "Mens: black/white",
        price: 750,
        size: 10,
        countInStock: 10,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngLllFyVnGOzMormjvcX_w1AF9U5KyjrDUCJuDoN7K246iZNKS-MzWaFimE9S1z-o4V4&usqp=CAU"

    },
    {
        name: "Jordan 11's",
        color: "Mens: black/red",
        price: 450,
        size: 10,
        countInStock: 10,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIrPWSR1ggp1QGwf-AGVxLBLiZvety8m4DG-1D_3dboD7AmtdU69B0GPD6oW9Edho_QA&usqp=CAU"
    },
    {
        name: "Jordan 11's",
        color: "Mens: white/grey",
        price: 500,
        size: 10,
        countInStock: 10,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEbH96l60jwRXA42qErWIU-XK2boTz9E__0VS2ZDyP2SrvHPCXXvTqylJ1u-NKS7UyfI&usqp=CAU"
    },
    {
      name: "Jordan 1 Retro University Blue",
      color: "Mens: white/baby blue",
      price: 600,
      size: 10,
      countInStock: 10,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHUO9Rw8o42tpoNLKhjbfgwLl1NaGYqa5XNxjFOW2AFUUUCgtm6aqkHPZCIfwPoGXGWE&usqp=CAU"
  },
    ]

  try {
    const seedItems = await Shoe.create(newShoe)
    res.send(seedItems)
  } catch (err) {
    res.send(err.message)
  }
})

// GET (index) list of shoes
shoes.get('/', (req, res) => {
  Shoe.find({}, (error, foundShoes) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(200).json(foundShoes)
    }
  })
})

shoes.get('/:id', (req, res) => {
  Shoe.findById({_id: req.params.id}, (error, foundShoe) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(200).json(foundShoe)
    }
  })
});



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