import './App.css';
import Task from './client/components/Task';
import React from 'react';

function App() {
  const tasks = [
    "Lavar o carro",
    "Lavar o cabelo",
    "Estudar"
  ];

  return (
    <div>
      <h1>To Do List</h1>
      {tasks.map((value) => {
        //Arrow function retornando um componente, Task (checkbox), que recebe um valor, no caso o array de tasks.
        return <p> <Task text={value}/></p>
      })}
    </div>
  );
}

export default App;
