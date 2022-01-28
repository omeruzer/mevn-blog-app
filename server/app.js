const express = require('express');
const app = express()

//cors
const cors = require('cors')
app.use(cors())

//.env
require('dotenv/config')

const bodyParser = require('body-parser');
app.use(bodyParser.json())

//PORT
const port = process.env.PORT

//Database
const db = require('./helpers/db.js')();

//router
const articles = require('./routes/articles')

//route
app.use('/post',articles)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})