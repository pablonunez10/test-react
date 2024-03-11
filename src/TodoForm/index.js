import React from "react";
import './TodoForm.css'
function TodoForm() {
    return (
        <form>
            <label> Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo"/>
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button TodoForm-button--add">Agregar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
            </div>
        </form>
    )
}

export { TodoForm }