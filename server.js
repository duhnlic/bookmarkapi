require('dotenv').config() 
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const SECRET = process.env.SECRET_KEY

const app = express();
const PORT = process.env.PORT || 8000;

//database and middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.body)
    next()
})
app.use(cors())
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
mongoose.connection.once('connected', () => console.log('Connected to Mongo Mr. Brian'))

app.use('/bookmarks', require('./controllers/bookmarkController'))

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to your bookmarks!</h1>`)
})



app.listen(PORT, () => console.log('Yo! I am here on PORT: ', PORT))