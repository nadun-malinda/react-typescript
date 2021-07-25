import { useRef, useContext } from 'react'
import { TodosContext } from '../store/todos.context'
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const todosCtx = useContext(TodosContext)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputRef.current!.value

        if (enteredText === '') return
        todosCtx.addTodo(enteredText)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" name="text" ref={inputRef} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo