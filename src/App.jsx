import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Task } from './Task'

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");



  const handleChange = (event) => {
    setTask(event.target.value);

  };
  const AddTask = () => {

    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      conclued: false
    }
    console.log(task);
    setTodoList([...toDoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(toDoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, conclued: true };
      } else {
        return task;
      }
    })
    );
  };

  return (
    <div className="App" style={{
      backgroundColor: "#d3d3d3",
      padding: "50px",
      borderRadius: "10px",
      display: 'flex',
      flexDirection: "column",
      gap: "10px"

    }}>
      <h1>TO-DO LIST</h1>
      <div style={{display: 'flex', gap: "20px"}}>
      <input type="text" onChange={handleChange} />
      <button onClick={AddTask}>Add task</button>
      </div>

      <div> {toDoList.map((task) => {
        return (
          <Task
            conclued={task.conclued}
            taskName={task.taskName}
            id={task.id}
            completeTask={completeTask}
            deleteTask={deleteTask} 
          />
        )
      })}

    </div>
  </div>
)};

export default App
