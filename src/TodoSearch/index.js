import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
// import { TodoContext } from '../TodoContext';

function TodoSearch(){
   // const {

  //   searchValue,
  //   setSearchValue,
  //  } = React.useContext(TodoContext);''
  // const [newAddTodo, setnewAddTodo] = React.useState ('')
  // const onSubmit = (event) => {
  //     event.preventDefault()
  // newAddTodo();
  // };
  //  return (
  //     <form onSubmit={onSubmit}>
  //       <input placeholder='' onSubmit={onSubmit} value={setnewAddTodo}/>    
  //     </form>
  //        //  <input placeholder="Cortar Cebolla" className="TodoSearch" value={searchValue}
  //  onChange={ (event)=> {
  //   setSearchValue(event.target.value);
  // }}
  //  />  
const [mostrarTodo] = React.useContext (TodoContext)
const [ newAddTodo, setNewAddTodo] = React.useState ('')
const handleChange = (event) => {
  setNewAddTodo(event.target.value)
  mostrarTodo(newAddTodo);
};
return (
    <form>
      <input type = 'text' value={newAddTodo}  onChange={handleChange} />
      {/* <button onClick={NewAddTodo}> </button> */}
    </form>
  
  );

  }

export {TodoSearch};