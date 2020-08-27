import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import { db } from './Firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const input = value;
  useEffect(() => {
    db.collection('todos').orderBy('todo', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => {
        return {id: doc.id,todo: doc.data().todo}
      }))
    })
  }, []);
  console.log(todos);
  const addTodos = (event) => {
    event.preventDefault();
    var time = new Date();
    var task = {
      time: time,
      todo: value
    };
    db.collection('todos').add(task);
    setValue('');
  }
  return (
    <div className="App">
      <h1>Todo App With Cloud Database⏰</h1>
      <form>
        <FormControl>
          <InputLabel>✍ Write Your Todo</InputLabel>
          <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodos} variant="contained" color="primary">
          Add Todos
        </Button>
      </form>
      <ul>
        {
          todos.map(todo => (
            <Todo task={todo} key={todo.id}></Todo>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
