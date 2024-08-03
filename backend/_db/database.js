
const mongoose = require('mongoose')

const database = () =>{
  mongoose.connect('mongodb+srv://raviraja2000:raviraja2000@cluster0.eabcdxj.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected"))
  .catch(() => console.log("DB not connected"))
}

module.exports = database