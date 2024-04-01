import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function EmojiClicker(){

    const [emojiList, setEmojiList] = useState([{emoji: '😀', id: uuidv4()}])

    const emoji = ['🤣', '🥰','⭐️', '🐯', '🐭']

    const addEmoji = ()=>{
        setEmojiList((oldEmojiList)=> [...oldEmojiList, {emoji: emoji[Math.floor(Math.random()*emoji.length)], id: uuidv4()}]);
    }

    const deleteEmoji = (id) => {
       
        setEmojiList((oldList)=>[...oldList.filter((e)=> e.id !== id)])
    }

    const makeHearts = () => {
        setEmojiList(oldList => {
            return oldList.map((em)=> {
            return {...em, emoji: '👨‍❤️‍👨'}
        })
    }
        )
      
    }
    return (
        <div>
                <button onClick={addEmoji}>Add Emoji</button>
                <button onClick={makeHearts}>Make Them All Hearts</button>
              <ul>
                {emojiList.map((em)=> <span style={{fontSize: '4rem'}} key={em.id} onClick={()=> deleteEmoji(em.id)}>{em.emoji}</span>)}
              </ul>
              
        </div>
  
    )
}