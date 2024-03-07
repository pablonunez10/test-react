import './CreateTodoButoon.css'
function CreateTodoButoon(){
    return (
        <button className="CreateTodoButoon" onClick={(event) => {
            // console.log("le diste click")
            // console.log(event)
            // console.log(event.target)
        }}>
            +
        </button>
    );
  }

export {CreateTodoButoon};