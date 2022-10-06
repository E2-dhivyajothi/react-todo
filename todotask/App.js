import { useEffect, useState } from "react";
import FormComponent from "./Form";
import "./styles.css";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default function App(props) {
	
	const [todos, setTodos] = useState([]);
	const [todoList, setTodoList] = useState([]);
	const [status, setStatus] = useState();
	const [editInputTodo, setEditInputTodo] = useState("");

	//save to the local storage
	useEffect(() => {
		console.log()
		if (localStorage.getItem("todosData")) {
			setTodos(JSON.parse(localStorage.getItem("todosData")));
		}

	},[]);

	useEffect(() => {
		localStorage.setItem("todosData", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {	
		filterHandler();
	});

	useEffect(() => {
		setStatus(props.filter)
	}, [props]);

	const filterHandler = () => {
		switch (status) { 
			case "complete":
				setTodoList(todos.filter((todo) => todo.completed === true));
				break;
			case "uncomplete":
				setTodoList(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setTodoList(todos);
				break;
		}
	};
 
	const handleNewTodoSubmit = (title) => {
		if (!editInputTodo) {
			setTodos([
				...todos,
				{  
					title: title,
					completed: false,
					id: Math.random() * 1000,
			        
				}
			]);
		} else {
			
			const newTodo = todos((todo) => {
				return todo.id === editInputTodo.id
					? { title : title, 
						id: editInputTodo.id, 
						completed: editInputTodo.completed }
					: todo;
			});
			setTodos(newTodo);
			setEditInputTodo();
		}
	};

	const completeHandle = (todo) => {
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id) {                                      
					return {
						...el,
						completed: !el.completed,
						
			
					};
				}
				return el;
			})
		);
	};

	const submitHandle = (todo, title) => {
		setTodos(
			todos.map((ed) => {
				if (ed.id === todo.id) {
					ed.title = title;
				}
				// console.log(ed);
				return ed;
			
			})
		);
	};

	const createTodoList = () => {
		return todoList.map((todo) => (
			<Todo
				key={todo.id}
				todo={todo}
				onDeleteClick={() => {
					setTodos(todos.filter((el) => el.id !== todo.id));
					// console.log(todo)
				}}
				onCompleteClick={() => completeHandle(todo)}
				
				onEditSubmit={(text) =>{
					submitHandle(todo,text);
					
				}}
			/>
		));
	};
	
	return (
		<div className="App">
		<div className="todohead"> <p >TODO TASK</p></div> 
		
				<FormComponent onSubmit={handleNewTodoSubmit} />
				<TodoList
					createTodoList={createTodoList}	
				/>
	    </div>

		
	);
}
