export default function ListItem({id, item, quantity, completed}){
    const styles = {color: completed ? 'grey' : 'red', textDecoration: completed && "line-through"}

   return (
    <li style={styles}>
    {item} - {quantity} <input type="checkbox"/>
</li>
   )
}