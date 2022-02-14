require("dotenv").config();
const Shoe = require("./models/Shoe");
const mongoose = require ('mongoose')
const mongoURI ='process.env.MONGODB_URI'
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
        price: 299,
        size: 10,
        countInStock: 10,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngLllFyVnGOzMormjvcX_w1AF9U5KyjrDUCJuDoN7K246iZNKS-MzWaFimE9S1z-o4V4&usqp=CAU",
    }
  , (err, data)=>{
    if (err){
      console.log(err);
    }else{
  console.log(data);
  db.close()
}
})


