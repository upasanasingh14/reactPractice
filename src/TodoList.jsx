import { useState } from "react"

export default function TodoList() {

    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTaskVal = (event) =>{
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo}  onChange={updateTaskVal}/>
            <br/><br/>
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/><br/><br/>
            <hr/>

            <h3>Tasks to complete:</h3>
            <ul>
                {
                    todos.map((todo)=> (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}