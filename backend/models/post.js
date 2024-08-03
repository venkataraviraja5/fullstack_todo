const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    post:{
        type:String
    }
})

module.exports = mongoose.model('todo',postSchema)