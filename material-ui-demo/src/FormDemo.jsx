import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';


import { useState } from 'react'

export default function FormDemo() {

    const [value, setValue] = useState("")
    const [volume, setVolume] = useState(50);

    const handleChange = (e)=> {
        setValue(e.target.value)
    }

    const handleVolume = (e, newVal)=> {
        setVolume(newVal)
    }

    return (
        <div>
             <Box sx={{ p: 4, border: '1px solid grey', margin: "0 auto", width: 500, height: 100 }}>
             <div>
             <VolumeDown />
        <Slider aria-label="Volume" value={volume} onChange={handleVolume} />
        <VolumeUp />
        <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="type your name" value={value} onChange={handleChange}/>
        </div>
    </Box>
            
            
        </div>
    )
    

}