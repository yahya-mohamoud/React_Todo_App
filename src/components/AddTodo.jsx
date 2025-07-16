import React, { useEffect, useState } from 'react'

function AddTodo({tasks, setTasks, setShowInput, editing, editingTask}) {
    const [inputValue, setInputValue] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if(editing && editingTask) {
            setInputValue(editingTask.text)
            setIsComplete(editingTask.isComplete)
        }
    },[editing, editingTask])

    const addNewTask = () => {
        if(inputValue.trim() === '') return;

        if(editing) {
            const updatedTask = tasks.map(task => 
                task.id === editingTask.id 
                ? {...task, text: inputValue, isComplete}
                : task
            )
            setTasks(updatedTask)
        } else {
            const newTodo = {
                id: tasks.length + 1,
                text: inputValue,
                isComplete: {isComplete}
            }
            setTasks([...tasks, newTodo])
        }

        setInputValue('')
        setShowInput(false)
        setIsComplete(false)
    }
  return (
     <div className='add-todo-form'>
        <label htmlFor="" className='taskLbl'>Task Name:</label>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter task"
          />
          <div className="check">

          <label htmlFor="check">Completed: </label>
          <input 
            type="checkbox"
            name='check' 
            checked={isComplete} 
            onChange={(e) => setIsComplete(e.target.checked)}
            /> 
            </div>
          <button className="Add" onClick={ addNewTask}>{editing ? 'Save' : 'Add'}</button>
        </div>
  )
}

export default AddTodo