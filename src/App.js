import './App.css';
import Task from './client/components/Task';

function App() {

  
  const tasks = [
    "Lavar o carro",
    "Lavar o cabelo",
    "Estudar"
  ];
  
  return (
    <>
    <h1>To do List</h1>
    <Task text="Titulo da tarefa"/>
    </>
  );
}

export default App;
