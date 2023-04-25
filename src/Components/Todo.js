import React from 'react'
import { doneTask, removeTask } from '../Redux/todoSlice/TodoSlice'
import { useDispatch } from 'react-redux'
import EditTask from './EditTask';
function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ? "done" : "undone"}`}>
      <div className="text">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <span className="Span" onClick={() => dispatch(doneTask({ id: todo.id }))}>{todo.isDone ? "Done" : "Not Done"}</span>
      
      <EditTask id={todo.id}/>
      
      <button onClick={() => dispatch(removeTask({ id: todo.id }))}>remove</button>
    </div>
  )
}

export default Todo