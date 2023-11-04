import { useState } from "react";
function NewItem({onAddNewToDo}){

  const [toDo, setToDo] = useState('')
  const [canAdd, setCanAdd] = useState(false);
  
  function onChange(val){
    setToDo(val);
    setCanAdd(val.length > 0);
  }

  function addItem(e){
    setCanAdd(false)
    onAddNewToDo(toDo);
    setToDo('');
  }

  return <>
            <input type="text" id="newItemId" placeholder="Enter to do" onChange={e=>onChange(e.target.value)} value={toDo}></input>
            <button title="Add" id="btnSubmitNewItem" onClick={addItem} disabled={!canAdd}>Add</button>
        </>
}

export default NewItem;