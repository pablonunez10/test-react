import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButoon } from '../CreateTodoButoon';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos} from '../EmptyTodos'
import React from 'react';



function AppUI ({
    loading,
    error,
    completedTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodos,
    deleteTodo,
    completeTodo
    }) {
    return (
        //we used xml width js
    //labels in lowercase convert them into REACT elements, then transform REACT component
    // <div className="App">
    <React.Fragment>
    <TodoCounter completed={completedTodos} total={totalTodos} />


    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
        {loading && (
        <>
          <TodosLoading/>
          <TodosLoading/>
          <TodosLoading/>
        </>)}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
        {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}

      {/* <TodoItem/>
      <TodoItem/>
      <TodoItem/> */}
    </TodoList>
    <CreateTodoButoon/>
    </React.Fragment>
  // </div>
    )
}

export { AppUI } ;