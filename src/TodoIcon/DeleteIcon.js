import React from "react";
import {TodoIcon} from './index.js';
function DeleteIcon ({completed, onDelete}) {
    return (
        <TodoIcon
        type="delete"
        color= "gray"
        onClick={onDelete}
        />
    );
}

export { DeleteIcon };