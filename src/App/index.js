import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
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
  
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // console.log(' Log 1')
  // React.useEffect(() => {
  //   console.log(' Log 2');
  // });
  // React.useEffect(() => {
  //   console.log(' Log 2');
  // }, []);
  // React.useEffect(() => {
  //   console.log(' Log 2');
  // }, [totalTodos]);
  // console.log(' Log 3')
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );


  const completeTodo = (text) => {
    const newTodos = [...todos];
    // ... copia el estado del array
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    // ... copia el estado del array
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUI 
    loading={loading}
    error={error}
    completedTodo = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completedTodos = {completedTodos}
    deleteTodo = {deleteTodo}
    completeTodo = {completeTodo}
    />
  )
}




export default App;
