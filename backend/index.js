const express = require('express')

const app = express()

const port = 8080

app.get('/logout',(req,res) =>{
    res.send("hey")
})

app.get('/',(req,res) =>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log("server on 8080")
})