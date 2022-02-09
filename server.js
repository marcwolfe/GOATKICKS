require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const cors = require('cors');
const session = require('express-session')
const yelp = require('yelp-fusion');
const apiKey = process.env.REACT_APP_API_KEY
const PORT = process.env.PORT;
const MongoDBStore = require('connect-mongodb-session')(session)


//SETUP CORS middleware
const whitelist = ['http://localhost:3000', 'herokufrontendaddress']
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


const SESSION_SECRET = process.env.SESSION_SECRET

// app.set('trust proxy', 1)

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: new MongoDBStore({
    //     uri: process.env.MONGODB_URI,
    //     collection: 'mySessions'
    // }),
    // cookie: {
    //     sameSite: 'none',
    //     secure: true
    // }
}))


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

const isAuthenticated = (req, res, next) => {
    console.log(req.session.currentUser)
    if(req.session.currentUser){
        next()
    }else {
        res.status(403).json({message: "login is required"})
    }
}

//this will tell server to parse JSON data, and create req.body object.
app.use(express.json())



//controllers
app.use('/shoes', require('./controllers/shoesController.js'));
app.use('/users',  require('./controllers/usersController.js'));

app.get('/', (req, res) =>{
  res.send('hello to the backend')
})

app.listen(PORT, ()=> {
    console.log('listening on port andre 3k')
})
