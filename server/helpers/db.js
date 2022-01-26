const mongoose = require('mongoose');
require('dotenv').config()
module.exports = ()=>{
    const url = process.env.DB_CONNECT
    mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true })

    mongoose.connection.on('open',()=>{
        console.log('connect');
    })
    
    mongoose.connection.on('error',()=>{
        console.log('error');
    })
}