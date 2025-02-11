import React, { useEffect, useState } from 'react'
import './Style.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const addTask = (task)=>{
    setTasks([...tasks,task])
  }

  const updateTask = (index, updatedTask)=>{
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };

  const deleteTask = (index)=>{
    setTasks(tasks.filter((_,i)=>i!=index));
  }
  return (
     <div className='App'>
      <header className="bg-gray-900 py-6 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Task<span className="text-yellow-400">Buddy</span>
        </h1>
        <p className="text-gray-400 italic">Your friendly task manager</p>
      </div>
    </header>

      <TaskForm addTask={addTask}/>
      <ProgressTracker tasks = {tasks} />
      <TaskList tasks= {tasks} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  )
}
