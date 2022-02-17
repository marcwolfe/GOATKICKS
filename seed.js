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
  name: "Jordan 4 Retro Oreo",
  color: "Mens: white/grey",
  price: 345,
  size: 10,
  countInStock: 0,
  imgUrl: "http://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-4-retro-white-oreo-2021-CT8527-100_1_baglce_1800x1800.jpg?v=1629486537"
},{
  name: "Jordan 6 University of North Carolina",
  color: "Mens: white/baby blue",
  price: 950,
  size: 10,
  countInStock: 0,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1BtpPuorQdkx1IWk2v_EGnvEtO1Rxs-eXLYYs88Sn82CIKv5ovsvEcWZB5ZrfiPtRSI&usqp=CAU"
},{
  name: "Jordan 1 Blue Chill",
  color: "Mens: white/babyblue/black",
  price: 750,
  size: 10,
  countInStock: 0,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHUO9Rw8o42tpoNLKhjbfgwLl1NaGYqa5XNxjFOW2AFUUUCgtm6aqkHPZCIfwPoGXGWE&usqp=CAU"
},{
  name: "Jordan 1 Valentines",
  color: "Women: white/black/pink",
  price: 325,
  size: 6,
  countInStock: 10,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhvMO1G76W8IkSfyvjPCl9PMIScyPRZYpktX_tAtfPYNCMwvW731ebpsYORWJgaKDl-k&usqp=CAU"
},{
  name: "Jordan 4 Canvas",
  color: "Womens: nude",
  price: 600,
  size: 4,
  countInStock: 10,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKn9y57gqe03nQ3RbISUrrL5jzrQfnV6S5MASJTsh1IJzuSFdH8-Cov0cKIYioUODp8Wc&usqp=CAU"
},
{
  name: "Jordan 11 Heiress (Red Velvet)",
  color: "Womens: maroon",
  price: 1000,
  size: 4,
  countInStock: 0,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fiXbxORw9TsMqcFtrcgNEPuH87P0tFNiUZO_4VKlpxLrQUEwZPUQMMlEBVc6U2e52a0&usqp=CAU"
},
{
  name: "Jordan 11  Heiress (Purple Velvet)",
  color: "Womens: purple",
  price: 1200,
  size: 7,
  countInStock: 5,
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1shs8CKGI5-3aBmoKZVUdUew-Rnu6OlRrqztD3cHHsNEwmNHqt0vx5VLPsVATR3HeE6Q&usqp=CAU"
},


(err, data)=>{
    if (err){
      console.log(err);
    }else{
  console.log(data);
  db.close()
}
})


