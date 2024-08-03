
const mongoose = require('mongoose')

const database = () =>{
  mongoose.connect(' ',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected"))
  .catch(() => console.log("DB not connected"))
}

module.exports = database
