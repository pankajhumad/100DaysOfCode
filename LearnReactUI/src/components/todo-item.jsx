import { useState } from "react";

function ToDoItem({item, onSaveItem}){
    const [toDo, setToDo] = useState(item);
    const [isEdit, setIsEdit] = useState(false)

    let toDoText = toDo.text;
    
    function handleTextChanged(e){
        toDoText = e.target.value;
        setToDo({...toDo, text: toDoText});
    }

    function saveItem(){
        setIsEdit(false);
        onSaveItem(toDo);
    }

    if (!isEdit){
        return <div>{toDo.text} <button title="edit" onClick={e=>setIsEdit(true)}>Edit</button> </div>    
    } else{
       return <>
            <input type="text" id="itemId" placeholder="Enter to do"  value={toDoText} onChange={ handleTextChanged  }></input>
            <button title="Save" id="btnSave" onClick={saveItem}>Save</button>
            <button title="Cancel" id="btnCancel" onClick={e=>setIsEdit(false)}>Cancel</button>
        </>
    }
}

export default ToDoItem;