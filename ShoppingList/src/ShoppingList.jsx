import ListItem from "./ListItem"

export default function ShoppingList({items}) {
    return (
       <ul >
        {items.map(i =>  <ListItem key={i.id} {...i}/>)}
       </ul>
    )
}