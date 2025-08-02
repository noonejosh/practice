import React, { useState } from 'react';

function TodoList(){
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleAddTask(){
        if(newTask !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleNewTask(e){
        setNewTask(e.target.value);
    }

    function handleDeleteTask(index){
        setTask(t => t.filter((_,i) => i !== index));
    }

    function handleMoveUpTask(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    function handleMoveDownTask(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    return(
        <div className='ToDo-container'>
            <h1 className='title'>To-Do-List</h1>
            <div className='inp'>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleNewTask}/>
                <button className='addbtn' onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task,index) => 
                    <li key={index} className='tasks'>
                        <p className='task'>{task}</p>
                        <button className='btn' id="del" onClick={() => handleDeleteTask(index)}>Delete</button> 
                        <button className='btn' id='emoji' onClick={() => handleMoveUpTask(index)}>&#128070;</button>
                        <button className='btn' id='emoji' onClick={() => handleMoveDownTask(index)}>&#128071;</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList