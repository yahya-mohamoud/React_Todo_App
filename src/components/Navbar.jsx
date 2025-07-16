import  { useState } from 'react'

function Navbar({onAddClick}) {
   

  return (
    <div className='navbar'>
        <h1>Todo list App</h1>
        <button className='addTask' onClick={onAddClick}>Add Task</button>
    </div>
  )
}

export default Navbar