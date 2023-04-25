import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Todo from './Todo';
import Addtodo from './Addtodo';

function Listtodo() {
  const todos =useSelector ((state)=> state.todo.todolist);
  const [showdone, setshowdone] = useState(false);
  console.log(todos)
  return (
    <div className="list-todo">
      <Addtodo/>
      <button onClick={()=>setshowdone(!showdone)}>{showdone ? "show undone": "show done" }</button>
      {todos.filter((todo)=>todo.isDone===showdone).map((todo)=>(<Todo todo={todo}/>))}
    </div>
  )
}

export default Listtodo;