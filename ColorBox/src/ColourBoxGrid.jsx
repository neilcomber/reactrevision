import Box from "./Box"
import './ColourBoxGrid.css'

export default function ({colour}) {

    const boxes = [];

    for(let i=0; i < 25; i++){
        boxes.push(<Box key={i} colour={colour}/>)
    }

return (
    <div className="colourBoxGrid">
        {boxes}
    </div>
    
)
    
}