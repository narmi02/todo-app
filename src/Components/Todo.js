import React, { useContext, useEffect } from 'react'
import Todoitem from './Todoitem'
import todocontext from '../context/Todocontext'
import Addtodo from './Addtodo'



const Todo = () => {
const context=useContext(todocontext)
const {todos,gettodo}=context

useEffect(()=>{
  gettodo()
},[])

  return (
    <>
    <Addtodo/>
    <div className='row'>
        {todos&& todos.map((todo,index)=>{
          return <div key={index} className='col-md-4'>
                 <Todoitem todo={todo} index={index} key={todo.id}/>
            </div>
        })}
    </div>
  </>
  )
}

export default Todo
