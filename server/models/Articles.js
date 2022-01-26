const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    slug:{
        type:String,
    },
    author:{
        type:String,
        required:true

    },
    img:{
        type:String,
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    
})

module.exports = mongoose.model('articles',articleSchema)