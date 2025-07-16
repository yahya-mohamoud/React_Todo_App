function Todolist({ tasks, setTasks, onEdit }) {

    const DltHandler = (idToDlt) => {
        const updatedItems = tasks.filter(item => item.id !== idToDlt)
        setTasks(updatedItems)
    }

    return (
        <>
            <div className='todo'>
                
                    {tasks.map((task) => {
                        return (
                            <div className="todoList" key={task.id}>
                                <h3>{task.text}</h3>
                                <p>{task.isComplete ? "Completed" : "Not Completed"}</p>
                                <button className='editBtn' onClick={() => onEdit(task)}>Edit</button>
                                <button className="dltBtn" onClick={() => DltHandler(task.id)}>Delete</button>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Todolist