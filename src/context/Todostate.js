import { useState } from "react";
import todocontext from "./Todocontext";

const Todostate = (props) => {
    const url = "https://ghc-applications-api.vercel.app/todos"
    const initialtodos = ""
    const [todos, setodos] = useState(initialtodos)

    // display todos
    const gettodo = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            const json = await response.json()
            setodos(json)
        } catch (error) {
            console.error(error.message);
        }
    }

    // add todo

    const addtodo=async(title)=>{
        try {
            const response=await fetch(url,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({title})
            })
            const json=await response.json()
            setodos(todos.concat(json))
        } catch (error) {
            console.error(error.message);

        }
    }

    // edit a todo

    const updatetodo=async(id,completed)=>{
        try {
        const response=await fetch(`https://ghc-applications-api.vercel.app/updatetodos/:${id}`,{
            method:'PUT',
            headers:{
                // "Content-Type": "application/json"

            },
            body:JSON.stringify({completed})
        })
        let newtodo=JSON.parse(JSON.stringify(todos))
        for (let index = 0; index < todos.length; index++) {
            const element = newtodo[index];
            if(element.id===id){
                element.completed=completed
                console.log(element.completed)
                break
            }
        }
        setodos(newtodo)
    } catch (error) {
    }
}

    // delete a todo

    const deletetodo = async (id) => {
        try {
            const response=await fetch(`https://ghc-applications-api.vercel.app/todos/:${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                }
            })
        } catch (error) {
            console.error(error.message);

        }
        const newtodo = todos.filter((todo) => { return todo.id !== id })
        setodos(newtodo)
    }

    // updating status of todo

return (
    <todocontext.Provider value={{ gettodo, todos, deletetodo,addtodo,updatetodo }}>
        {props.children}
    </todocontext.Provider>
)
}

export default Todostate