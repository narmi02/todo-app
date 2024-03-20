import React, { useContext, useState } from 'react'
import todocontext from '../context/Todocontext'

const Addtodo = () => {
    const [todo,settodo]=useState({title:""})
    const context=useContext(todocontext)
    const {addtodo}=context

    const handleclick=()=>{
        addtodo(todo.title)
    }
    const onchange=(e)=>{
        settodo({...todo,[e.target.name]:e.target.value})
    }

  return (
    <>
    <div className="mx-5 my-4 card" style={{width: "17rem",fontFamily:` "Ubuntu Mono", monospace`,minHeight: "12rem"}}>
  <div className="card-body">
    <div className="form-floating">
  <textarea className="form-control" value={todo.title} onChange={onchange} name='title' placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label htmlFor="floatingTextarea2" ><h5>Add new Todo</h5></label>
</div>
<button type="button" className="btn btn-outline-dark btn-sm my-3"  onClick={handleclick}>save</button>
</div>
</div>

    </>
  )
}

export default Addtodo
