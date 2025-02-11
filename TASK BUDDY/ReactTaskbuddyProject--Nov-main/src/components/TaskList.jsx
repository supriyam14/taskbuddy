import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
    const toggleComplted = (index)=>{
        const updatedTask = {...tasks[index], completed: !tasks[index].completed}
        updateTask(index, updatedTask);
    }
  return (
    <ul className='task-list'>
        {tasks.map((task, index)=>(
            <li key={index} className={task.completed? 'completed':''}>
                <div>
                    <span>{task.text}</span>
                    <small>({task.priority}, {task.category})</small>
                </div>

                <div>
                    <button onClick={()=>toggleComplted(index)}>
                        {task.completed? 'Undo':'Completed'}
                    </button>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            </li>
     ))}
    </ul>
  )
}
