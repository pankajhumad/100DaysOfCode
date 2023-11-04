import ToDoItem from "./todo-item";
import NewItem from "./new-item";
import { useState } from "react";

function ToDoList(){
    
    const [name, setName] = useState('Pankaj')
    const [items, setItems] = useState([])

    var itemList = items.map(i=> <ToDoItem item={i} onSaveItem={updateItem} />)

    function updateItem(item){
        const updatedItems = items.map((i) => {

            if (i.id == item.id){
                return {...i, text: item.text};
            }else { 
                return i
            };
        });

        setItems(updatedItems);
    }

    function AddNewItem(newToDoText){

      var newItem = {'id': items.length + 1, 'text':newToDoText}  

       setItems([...items, newItem]); 
    }

    return (
        <>
            <div>{name}'s to do List</div>
            {itemList}
            <NewItem onAddNewToDo={AddNewItem} />
        </>
    )
    
}

export default ToDoList;