import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const[value,setValue] = useState("")
  const[tasks,settasks] = useState([])

  const postTask = async () =>{
    try{
      const addTask = await fetch('http://localhost:8080/post',{
        method:"POST",
        headers:{
          "Content-Type" : 'application/json'
        },
        body:JSON.stringify({
          task:value
        })
      })

      if(addTask.ok){
        const result = await addTask.json()
        console.log(result)
      }
    }
    catch(err){
      console.log(err)
    } 
  }

  const gettasks = async () =>{
    const fetchTasks = await fetch('http://localhost:8080')
    const tasksjson = await fetchTasks.json()

    settasks(tasksjson.tasks)
  }

  const deleteTask = async(id) => {
    const fetchurl = await axios.delete(`http://localhost:8080/${id}`)
  }

  useEffect(() => {
    gettasks()
  },[])

  return (
    <div className="App">
      <h1>Hello To-do</h1>

      <input type='text' onChange={(e) => setValue(e.target.value)}/>
      <button onClick={postTask}>Add</button>
      <div>
        {
          tasks.length > 0 ?
          <div>
            {tasks.map((val) => (
              <div style={{height:"100px", width:"100px",backgroundColor:"pink",marginTop:"10px"}}>
                 {val.post}
                 <button onClick={() => deleteTask(val._id)}>Delete</button>
              </div>
            ))}
           </div>
           :
           <p>Loading..</p>
        }
      </div>
    </div>
  );
}

export default App;
