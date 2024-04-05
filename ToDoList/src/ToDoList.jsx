import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';


const getInitialToDos = () => JSON.parse(localStorage.getItem('todos')) || [];


export default function ToDoList() {

    const [todos, setTodos] = useState(getInitialToDos)



    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const deleteTodo = (id) => {
      setTodos((prevToDos) => {
        return prevToDos.filter(todo => todo.id !== id)
      })
    }

    const toggleTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.map(todo => {
          if(todo.id === id) {
            return { ...todo, completed: !todo.completed}
          } else {
          return todo
          }
        })
        
      })
    }

    const addTodo = (text) => {
      console.log(text)
      setTodos((prevTodos)=>{
       return [...prevTodos, {id: crypto.randomUUID(), text: text, completed: false}]
      })
    }

   return (
    <Box sx={{ 
        p: 2, 
        display: "flex",
        justifyContent: "center", 
        flexDirection: "column", 
        alignItems: "center",
        m: 3
         }}>

<Typography variant="h2" gutterBottom>
        To Do List
      </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
      
           return <ToDoItem key={todo.id} todo={todo} handleDelete={deleteTodo} toggleTodo={toggleTodo}/>
      })}
      <ToDoForm addTodo={addTodo}/>
    </List>
    </Box>
    
     
   
   )
}