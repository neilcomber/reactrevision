import { useState } from 'react';

import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/create';

import Button from '@mui/material/Button';

export default function ToDoForm({addTodo}){

    const [text, setText] = useState("");

    const handleChange = (e)=> {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
        
    }

    return(
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
            <TextField 
            id="filled-basic" 
            label="add To Do" 
            variant="filled" 
            value={text} 
            onChange={handleChange}
            InputProps={
                {
                    endAdornment:  <InputAdornment position="end">
                    <IconButton
                      aria-label="add todo"
                      edge="end"
                      onClick={handleSubmit}
                    >
                        <Create/>
                    </IconButton>
                  </InputAdornment>
                
              
                }
            }
            />
          </form>
             
          
        </ListItem>
    )
}

