import ToDoItem from "./todo-item";
import NewItem from "./new-item";
function ToDoList(){
    return (
        <>
            <div>My to do List</div>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <NewItem />
        </>
    )
    
}

export default ToDoList;