import React, { useContext, useRef, useState, useEffect } from 'react'
import todocontext from '../context/Todocontext'


const Todoitem = (props) => {
  const context = useContext(todocontext)
  const { deletetodo, updatetodo } = context
  const { todo, index } = props
  const [tod, setod] = useState({ ecompleted: "" })
  const [vis,setvis]=useState(false)

  const edittodo = () => {
    setvis(true)
    setod({ eid: todo.id, ecompleted: todo.completed })
  }
  const handleclick = () => {
    updatetodo(todo.id, tod.ecompleted)
  }

  const handleonchange = (e) => {
    setod({ ...tod, [e.target.name]: e.target.value })

  }

  return (
    <>
      <div className="container card container my-5 py-3" style={{ width: "17rem", minHeight: "12rem", fontFamily: ` "Ubuntu Mono", monospace` }}>
        <div className="card-header ">My todo-{index}
        </div>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-primary">{todo.title}</h5>
          <p className={`card-text text-${todo.completed ? "success" : "danger"}`}>status : {todo.completed ? "Done " : "Not Completed"} </p>
          <i className="fa-solid fa-pen-to-square fa-sm mx-2"  style={{ cursor: "pointer" }} onClick={() => { edittodo(todo)}}></i>
          <i class="fa-solid fa-trash fa-sm mx-2 " style={{ cursor: "pointer" }} onClick={() => deletetodo(todo.id)} ></i>

        </div>
        <div className={`${!vis?"d-none":""}`}>
        <select id="inputState"  defaultValue={todo.completed} onChange={handleonchange} name='ecompleted' className={`form-select`} >
          <option selected value="">Choose</option>
          <option value={"true"}>completed</option>
          <option value={"false"}>not completed</option>
        </select>
        <div>
        </div>
        <button type="button" className="btn btn-outline-dark btn-sm my-2" onClick={handleclick} >save</button>
        </div>

        <div className="card-footer text-body-secondary py-2 ">
          {todo.createdAt}
        </div>
      </div>


    </>
  )
}

export default Todoitem
