const Task = require("../models/post")

exports.task = async(req,res) =>{
 try{
    const task = req.body.task
    console.log(task)

    const newTask = new Task({
        post:task
    })

    const result =  await newTask.save()

    console.log(result,"result");

    return res.json({result:"task Added"})
 }
 catch(err){
    console.log("not saved")
 }
}

exports.getTasks = async(req,res) =>{
    const tasks = await Task.find()

    if(tasks){
      return  res.send({tasks:tasks})
    }
}

exports.deleteTask = async ( req,res) => {
    const {id} = req.params
    console.log(id)
    if(id){
      const result = await Task.findByIdAndDelete({_id : id})
      if(result){
        return res.json({result:"deleted"})
      }
    }
   
}