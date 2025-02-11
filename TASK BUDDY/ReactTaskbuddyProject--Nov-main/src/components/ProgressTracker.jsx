import React from 'react'

export default function ProgressTracker({tasks}) {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progressbar = tasks.length ===0 ? 0: (completedTasks/ totalTasks) *100;
  return (
    <div className='progress-tracker'>
        <p>{completedTasks} tasks completed out of {totalTasks}</p>
        <div className='progress-bar'>
          <div className='progress'
          style={{width : `${progressbar}%`}}>
          </div>
        </div>
    </div>
  )
}
