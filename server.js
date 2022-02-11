require('dotenv').config()
const express = require('express');
const app = express();
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const cors = require('cors');
const session = require('express-session')
const PORT = process.env.PORT;
const MongoDBStore = require('connect-mongodb-session')(session)
const bodyParser = require('body-parser')

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


const CONNECTION_URL = 'mongodb+srv://Marc:1234@cluster0.4bfth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'




//SETUP CORS middleware
const whitelist = ['http://localhost:3000', 'herokufrontendaddress', 'process.env.PORT']
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

app.use(cors(corsOptions))
//this will tell server to parse JSON data, and create req.body object.
app.use(express.json())


//controllers
app.use('/shoes', require('./controllers/shoesController.js'));
// app.use('/users',  require('./controllers/usersController.js'));

app.get('/', (req, res) =>{
  res.send('hello to the backend')
})

app.listen(PORT, ()=> {
    console.log('listening on port andre 5k')
})
