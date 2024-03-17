import React, { useContext, useEffect, useRef, useState } from 'react'
import todocontext from '../context/Todocontext'


const Todoitem = (props) => {
  const context=useContext(todocontext)
  const {deletetodo,updatetodo}=context
  const { todo, index } = props
  const[tod,settod]=useState({id:"",ecompleted:""})
 const ref=useRef(null) 
 const refclose=useRef(null)
 const edittodo=(ctodo)=>{
    ref.current.click()
    settod({id:ctodo.id,ecompleted:ctodo.completed})
    // console.log(ctodo.id,"cur")
    console.log(tod.id)
  }
  const handleclick=()=>{
    updatetodo(tod.id,tod.ecompleted)
    refclose.current.click()
    // console.log("handle",tod.id)
 }
 const handleonchange=(e)=>{
  settod({...todo,[e.target.name]:e.target.value})

 }
 
  return (
    <>
      <div className="card container my-5 py-3" style={{ width: "17rem", minHeight: "12rem",  fontFamily:` "Ubuntu Mono", monospace`}}>
        <div className="card-header ">My todo-{index}
        </div>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-primary">{todo.title}</h5>
          <p className={`card-text text-${todo.completed?"success":"danger"}`}>status : {todo.completed?"Done ":"Not Completed"} </p>
          <i className="fa-solid fa-pen-to-square fa-sm mx-2" onClick={() => edittodo(todo)}></i>
          <i class="fa-solid fa-trash fa-sm mx-2 " onClick={()=>deletetodo(todo.id)} ></i>

        </div>
        <div className="card-footer text-body-secondary py-2 ">
          {todo.createdAt}
        </div>
      </div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add status</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="col-md-4">
                <label for="inputState" class="form-label">Completed</label>
                <select id="inputState" onChange={handleonchange}  name='ecompleted' class="form-select">
                  <option selected>Choose</option>
                  <option value={true}>completed</option>
                  <option value={false}>not completed</option>
                </select>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary btn-sm"onClick={handleclick} >Update</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Todoitem
