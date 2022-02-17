require("dotenv").config();
const Shoe = require("./models/Shoe");
const mongoose = require ('mongoose')
// const mongoURI ='process.env.MONGODB_URI'
const mongoURI = 'mongodb+srv://Marc:123@cluster0.4bfth.mongodb.net/goatkicksDB?retryWrites=true&w=majority'
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('DATABASE connected')
})

Shoe.create(
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
}, (err, data)=>{
    if (err){
      console.log(err);
    }else{
  console.log(data);
  db.close()
}
})


