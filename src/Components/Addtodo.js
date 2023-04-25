import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/todoSlice/TodoSlice';

function Addtodo() {
  const dispatch= useDispatch();
   const [task, settask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false
  });
  return (
    <div className="add-task">
      <input type="text" placeholder="entrer task title"
       onChange={(e)=>{settask({ ...task, title:e.target.value});
    }}/>
      <input type="text"placeholder="entrer task title"  onChange={(e)=>{settask({ ...task, title:e.target.value});
    }}/>
      <button onClick={()=>dispatch(addTask(task))}>Add new task</button>

    </div>
  )
}

export default Addtodo