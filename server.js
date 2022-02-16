require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const cors = require('cors');
const PORT = process.env.PORT;



//SETUP CORS middleware
const whitelist = ['http://localhost:3000', 'https://pley-frontend.herokuapp.com']
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else {
            callback(new Error('Not allowed by CORS'))
        }
    },

    credentials:true
}

app.use(cors(corsOptions))


//SETUP mongoose
const db = mongoose.connection;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},  ()=> {
    console.log('database connection established')
});

db.on('error', (err) => {console.log('ERROR: ', err) })
db.on('connected', () => {console.log('mongo connected') })
db.on('disconnected', () => {console.log('mongo disconnected') })


//this will tell server to parse JSON data, and create req.body object.
app.use(express.json())

//controllers
// app.use('/shoes', require('./controllers/shoeController'));
// app.use('/users',  require('./controllers/usersController'));

app.use("/api/shoes", require('./controllers/shoeController'));

// app.use("/api/shoes/:id", require('./controllers/shoeController'));

app.get('/', (req, res) =>{
  res.send('hello')
})

app.get('/:id', (req, res) =>{
    res.send('hello')
})

app.listen(PORT, ()=> {
    console.log('listening on port andre 5k')
})
