import { useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './Navbar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <NavBar />
     <FormDemo />

     </div>
    </>
  )
}

export default App
