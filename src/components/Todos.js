import React, { useState } from 'react'

const Todos=() =>{
    const [todos, setTodos] = useState([]);
    const [inputTitle, setInputTitle] = useState("");
    const [inputDes, setInputDes] = useState("");
  
    const handleAddTodo = () => {
      if (inputTitle !== "" && inputDes !=='') {
        const newTodo = {
          id: todos.length + 1,
          title: inputTitle,
          des:inputDes
        };
        setTodos([...todos, newTodo]);
        setInputTitle("");
        setInputDes("");
      }
    };
  
    const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    };
  return (
    <>
    <div className='mainTodo'>
      <h1>Todo Apps</h1>
        <div className='addlist'>
            <input
              type="text"
              placeholder="Add Title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <br></br>
            <textarea rows={3}
              type="text"
              placeholder="Add Des"
              value={inputDes}
              onChange={(e) => setInputDes(e.target.value)}
            />
           
          <button onClick={handleAddTodo}>Add</button>
        </div>
   

        <div className='datali'>
           {todos.map((todo) => (
              <div className='childf'  key={todo.id}>
                <p>{todo.title}</p>
                <p> {todo.des}</p>
                <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
              </div>
            
            ))} 
        </div>
    </div>
       
    </>
  )
}

export default Todos