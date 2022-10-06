import { useState } from "react";
const TodoText = ({
  isEditing,
  todo,
  setIsEditing,
  onEditSubmit,
  onCompleteClick
}) => {
  const [editText, setEditText] = useState(todo.title); 


  const editTextHandle = (e) => {
    setEditText(e.target.value)
  };
 
  const submitEditTextHanler = (e) => {
    // console.log(editText);
    e.preventDefault();
    onEditSubmit(editText);
    setIsEditing();
    
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={submitEditTextHanler}>
          <input type="text"      
            value={editText}
            onChange={editTextHandle}          
            className="edit-todo-input"
            required autoFocus
           
          />
        </form>      
      ) : (
        <span onClick={onCompleteClick} className="todo-item">
          {todo.title}
        </span>
      )}
    </>
  );
};

export default TodoText;