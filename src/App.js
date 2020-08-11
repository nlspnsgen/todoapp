import React from 'react';
import TodoContainer from './components/ToDoContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <TodoContainer text="Mein Text kommt als property"/>
    </div>
  );
}

export default App;