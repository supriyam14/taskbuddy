import React, { useState } from 'react'
import {PlusCircle} from 'lucide-react'
export default function TaskForm({addTask}) {
  const [task, setTask] = useState('');
  const[priority, setPriority] = useState('Medium');
  const[category,setCategory] = useState('General');

  const handlesubmit = (e)=>{
    e.preventDefault();
    addTask({text:task, priority, category, completed: false}) //send data addTask Method

    setPriority('Medium');
    setCategory('General');
    setTask('');
  }
  return (
    <div>
      <form onSubmit={handlesubmit} className='task-form'>
        <div id="inp">
        <input type='text'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button type='submit'>
        <PlusCircle size={29} />
        </button>
        </div>

        <div id="btns">
        <select value= {priority} onChange={(e)=>setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={category}  onChange={(e)=>setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
        </div>
      </form>
    </div>
  )
}
