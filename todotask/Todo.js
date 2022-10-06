	import { useState } from "react";
	import TodoText from "./TodoText";
	import { AiFillEdit,AiOutlineDelete} from "react-icons/ai";

	const Todo = ({todo, onDeleteClick, onEditSubmit, onCompleteClick}) => {
	const [isEditing, setIsEditing] = useState(false);
    // const [disable, setDisable] = useState(false);
	const deleteHandler = () => {
		if (typeof onDeleteClick === "function") {
		onDeleteClick();
		}
	};
	
	
	return (
		<div id="todos" class="todos">
		<li className={todo.completed ? "completed" : "uncompleted"}>
			

		    <TodoText			
			isEditing={isEditing}
			todo={todo}
			setIsEditing={setIsEditing}
			onEditSubmit={onEditSubmit} 
			/>
			
        
           <button		   
			onClick={onCompleteClick}
		    disabled={todo.completed}
			className={todo.completed ? "complete-btn " : "uncomplete-btn"}
			>   
				{todo.completed?"compelete":"inprogress"}
			
			
			</button>
			
			<button			
			onClick={() => setIsEditing((prev) => !prev)}
			className={todo.completed ? "not-edit" : "edit-btn"} 
			disabled={todo.completed}>
		    
		    <AiFillEdit/>
			</button>

			<button onClick={deleteHandler} className="destroy-btn">
			<AiOutlineDelete/>
			</button>
		</li>
		</div>
	);
	};
	export default Todo;