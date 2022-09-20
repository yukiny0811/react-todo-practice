import React, { useState } from "react"
import TodoForm from "./TodoForm"
function Todo(props) {
    const [edit, setEdit] = useState(false)
    const handleUpdate = data => {
        props.onSave(data)
        setEdit(false)
    }
    if (edit) {
        return (
            <TodoForm {...props} onSave={handleUpdate} onCancel={() => setEdit(false)} />
        )
    }
    return (
        <div>
            {props.Done && <span>O</span>}
            <div>
                <div>
                    <span>created at: {props.CreatedAt}</span>
                    <span>updated at: {props.UpdatedAt}</span>
                </div>
                <div>
                    {props.Content}
                </div>
            </div>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={() => props.onDelete(props.ID)}>Delete</button>
        </div>
    )
}
export default Todo