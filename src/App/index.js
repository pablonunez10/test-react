import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// localStorage.removeItem('TODOS_V1';)
// const defaultTodos = [
//   { text: 'Cut tomato', completed: true },
//   { text: 'Cut apple', completed: false },
//   { text: 'Cut lettuce', completed: false },
//   { text: 'Cut onion', completed: false },
//   { text: 'Cut orange', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// when the function name starts with a capital letter it is 99% a REACT component
// Custom Hooks

function App() {
  return (
  <TodoProvider>
    <AppUI />
 </TodoProvider>
  )
}
export default App;
