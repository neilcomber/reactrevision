import { useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Quill() {

    const [text, setText] = useState();

    const handleText= (val) => {
        setText(val)
    }


    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: text}}></div>
             <ReactQuill theme="snow" value={text} onChange={handleText} />
        </div>
      
    )
}