import {createContext,constContext } from 'react'

export const TodoContext=createContext({
    todo:[
        {
            id:1,
            todo:"todo message",
            completeted:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id)=>{}
})

export const useTodo=() =>{
    return useContext(TodoContext)
}


export const Todoprovider = TodoContext.Provider