import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState()
  const [todo, setTodo] = useState("")
  const [todoIndex, setTodoIndex] = useState("")
  return (
    <div className="App">
      <>
        <h2>Todo Application</h2>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />  <button style={{ marginLeft: '4px' }}
          onClick={() => {
            if (!String(todoIndex)) {
              if (todos?.length >= 1) {
                setTodos([...todos, todo])
              } else {
                setTodos([todo])
              }
            }
            else {
              let _todos = todos
              _todos[todoIndex] = todo
              setTodoIndex("")
              setTodos(_todos)
            }
            setTodo("")
          }}
        >{String(todoIndex) ? <span>Update</span> : <span>Add</span>}</button>
        {todos && todos?.map((todoData, index) => (
          <div key={index}>
            {todoData}
            <button onClick={() => {
              let _todos = todos.filter((todo, todoIndex) => todoIndex != index)
              setTodos(_todos)
            }}>Delete</button>
            <button onClick={() => {
              setTodoIndex(index)
              setTodo(todos[index])
            }}>Edit</button>
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
