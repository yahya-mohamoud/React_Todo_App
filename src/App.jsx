import  { useState } from 'react'
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Building React Todo list",
      isComplete: false,
    },
    {
      id: 2, 
      text: "Learning Node Js",
      isComplete: false,
    },
    {
      id: 3,
      text: "Learning Color Theory",
      isComplete: true,
    },
  ])
  const [editing, setEditing] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  const closeForm = () => {
    setTaskBeingEdited(null)
    setEditing(false)
    setShowInput(false)
  }

  const handleEdit = (task) => {
    setTaskBeingEdited(task)
    setEditing(true)
    setShowInput(true)
  }

  return (
    <div>
      <Navbar onAddClick={() => {
        setShowInput(true)
        setTaskBeingEdited(null)
        setEditing(false)
        }}/>
      {showInput ? (
        <AddTodo 
          tasks={tasks} 
          setTasks={setTasks} 
          setShowInput={closeForm}
          editingTask={taskBeingEdited}
          editing={editing}
          /> 
      ):
      <Todolist
      tasks={tasks}
      setTasks={setTasks}
      onEdit={handleEdit}
      />
    }
    </div>
  )
}

export default App