import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string, id: string, onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <li
            className={classes.item}
            onClick={() => props.onRemoveTodo(props.id)}>{props.text}</li>
    )
}

export default TodoItem