const express = require('express')

const app = express()

const port = 8080

app.get('/',(req,res)=>{
  res.send('hi from express')
})

app.listen(port,()=>{
    console.log("server on 8080")
})