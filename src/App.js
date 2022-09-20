import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import Todo from "./components/Todo.js"
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      ID: 1,
      Content: 'hoge',
      Done: true,
      CreatedAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    }
  ])
  const handleCreate = data => {
    data.ID = uuid()
    const now = (new Date()).toISOString();
    data.CreatedAt = now;
    data.UpdatedAt = now;
    setTodos([...todos, data]);
  }
  const handleDelete = id => {
    const index = todos.findIndex(item => item.ID === id)
    if (index >= 0) {
      const newList = [...todos]
      newList.splice(index, 1)
      setTodos(newList)
    }
  }
  const handleUpdate = data => {
    const now = (new Date()).toISOString()
    data.UpdatedAt = now
    setTodos(todos.map(item => {
      if (item.ID === data.ID) {
        return data
      }
      return item
    }))
  }
  return (
    <div className="App">
      <TodoForm onSave={handleCreate} />
      {todos.map(t => <Todo key={t.ID} {...t} onSave={handleUpdate} onDelete={handleDelete}/>)}
    </div>
  )
}

export default App
