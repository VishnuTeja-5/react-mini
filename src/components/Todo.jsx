import React, { useEffect, useReducer, useState } from 'react'

function Todo() {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = (input) => {
        setTasks([...tasks,{
            id : Date.now(),
            task : input
        }])
        
    }

    const deleteTask = (id) => {
        const delList = tasks.filter((t) => t.id !== id);

        setTasks(delList);
    }
  return (
    <>
        <div className=' text-white w-full h-screen flex flex-col items-center gap-1'>
            <h1 className=' text-3xl flex justify-center font-semibold font-serif'>
                Todo
            </h1>
            <div className=' w-fit h-fit bg-gray-900 border-gray-700 border-x border-y p-2 flex flex-col gap-2'>
                {/* Todo input area */}
                <div className=' w-full flex gap-1'>
                    <input 
                    type='text'
                    className=' w-80 px-2 bg-transparent border-x border-y border-blue-400 outline-none text-blue-400'
                    onChange={e => setInput(e.target.value)}
                    placeholder='Add task here...'
                     />
                    <button 
                    className=' border-blue-400 text-blue-400 border-x-2 border-y-2 rounded-md px-4 py-1'
                    onClick={() => {addTask(input)}}
                    >Add</button>
                </div>
                {/* Tasks List */}
                <div className=' w-full hfull border-x border-y p-4'>
                    <ul className='flex flex-col'>
                        {/* <li className=' border-blue-300 border-b py-3 flex gap-2 items-center'>
                            <input type='checkbox'/>
                            <label > Task 1 </label>
                        </li>
                        <li className=' border-blue-300 border-b py-3 flex gap-2 items-center'>
                            <input type='checkbox'/>
                            <label > Task 2 </label>
                        </li> */}
                        {
                            tasks.map( t => (
                                <li className=' border-blue-300 border-b py-3 flex gap-2 items-center justify-between'
                                key={t.id}>
                                    <div className=' flex gap-2 items-center '>
                                        <input type='checkbox' defaultChecked={t.isCompleted} value={t.task} id={t.id}/>
                                        <label htmlFor={t.id}>{t.task}</label>
                                    </div>
                                    
                                    <button onClick={() => {deleteTask(t.id)}} 
                                    className=' border-x border-y border-blue-400 text-blue-400 px-2 py-1 rounded-md'
                                    >delete</button>
                                </li>

                            ))
                        }
                        
                    </ul>
                </div>

            </div>
        </div>
    </>
    
  )
}

export default Todo