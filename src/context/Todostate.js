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
            console.error(error?.message);
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
            console.log(json);
            setodos(prev => [...prev, json])
        } catch (error) {
            console.error(error.message);

        }
    }

    // edit a todo

    const updatetodo=async(id,completed)=>{
        try {
        let id2=parseInt(id)
         let isTrueSet = /^true$/i.test(completed);   
        // const response=await fetch(`https://ghc-applications-api.vercel.app/updatetodos`,{
        //     method:'PUT',
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     body:JSON.stringify({isTrueSet})
        // })
        // const json=await response.json()
        // console.log(json)

        let newtodo=JSON.parse(JSON.stringify(todos))
        for (let index = 0; index < todos.length; index++) {
            const element = newtodo[index];
            if(element.id===id){
                element.completed=isTrueSet
                break;
            }
        }
        setodos(newtodo)
    } catch (error) {
        console.error(error?.message);

    }
}


    // delete a todo

    const deletetodo = async (id) => {
        try {
        //     const response=await fetch(`https://ghc-applications-api.vercel.app/todos/:${id}`,{
        //         method:"DELETE",
        //         headers:{
        //             "Content-Type": "application/json",
        //         }
        //     })
        // const json=response.json()
        // console.log("del",id)
        const newtodo = todos.filter((todo) => { return todo.id !== id })
        setodos(newtodo)
    } catch (error) {
        console.error(error.message);
    }
}



return (
    <todocontext.Provider value={{ gettodo, todos, deletetodo,addtodo,updatetodo }}>
        {props.children}
    </todocontext.Provider>
)
}

export default Todostate