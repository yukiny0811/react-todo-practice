import React, { useState } from "react"

function TodoForm(props = {
    Done: false,
    Content: ""
}) {
    const [done, setDone] = useState(!!props.Done)
    const [content, setContent] = useState(props.Content)
    const handleSave = () => {
        const data = {
            ...props,
            Done: done,
            Content: content
        }
        props.onSave(data)
        setDone(false)
        setContent("")
    }
    return (
        <div>
            <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            {props.ID && <button onClick={props.onCancel}>Cancel</button>}
        </div>
    )
}
export default TodoForm