const express = require('express')
const database = require('./_db/database')
const postRouter = require('./routes/task')
const cors = require('cors');

const app = express()

const port = 8080

app.use(express.json());
app.use(express.static('public'));

app.use(cors())
database()
app.use(postRouter)


app.get('/logout',(req,res) =>{
    res.send("hey")
})

app.get('/',(req,res) =>{
    res.send('hello')
})



app.listen(port,()=>{
    console.log("server on 8080")
})