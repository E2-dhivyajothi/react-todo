    import { useState} from "react";

// import Modal from "./Model";       

    const Form = ({ onSubmit }) => {
    const [inputText, setInputText] = useState("");
   	const [error,setError] = useState("");
    
    const inputTextHandle = (e) => {
	  setError("")
    setInputText(e.target.value);
    };
    
    const submitTodoHanler = (e) => {
    e.preventDefault(); 
		 if( (inputText.length<=0 )  || (inputText.match(/^ *$/) !== null))
		 {
			setError("Task should not be null")
		 }
     else if (!inputText.match(/^[A-Za-z]+$/))
     {       
      setError("Enter alphabet characters only without space")      
     }
		 else{
			onSubmit(inputText);
			setInputText("");
			setError("")
		 }
    };
   
    return (
    <div className="pu"> 
    <div className="popup">
        <form id="form" onSubmit={submitTodoHanler}>
        <div className="intadd">
          <input
            type="text"    
		        id="input"
            className="input"
            placeholder="Add Task"
            value={inputText}
            onChange={inputTextHandle}
            />
            </div>    
            <div  id= "errormsg"> {error.length>0? error:" "} </div>             
        <button id="add" type="submit">Add</button>
        </form> 
        </div>
        </div>
      );
    };

    export default Form;
