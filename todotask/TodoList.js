import Filter from "./Filter";


const TodoList = ({createTodoList }) => {
  return (
    <div className="fulltodolist">
    <Filter/> 
      <div className="fulltodolist2">
      <ul id="todots" className="todos">
        {createTodoList()}
      </ul>
      
    </div>
    </div>
   
  );
};

export default TodoList;
