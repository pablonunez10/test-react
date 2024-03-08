import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButoon } from '../CreateTodoButoon';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos} from '../EmptyTodos'
import { TodoContext } from '../TodoContext';
import React from 'react';




function AppUI () {
    return (
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <TodoContext.Consumer>
      {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }) => (
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
          </TodoList>
      )}
    </TodoContext.Consumer>
    <CreateTodoButoon/>
    </React.Fragment>
  )
}

export { AppUI } ;