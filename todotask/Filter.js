import { NavLink } from "react-router-dom";
import React from "react";

const Filter = () => {
  return (
    <div class="filter-todo">
      <NavLink to="/all"
        style={({ isActive }) => ({
          color: isActive ? 'deeppink' : 'white',textDecoration: 'none'
          
        })}>All</NavLink>

       <div>
      <NavLink to="/inprogress" 
        style={({ isActive }) => ({
          color: isActive ? 'deeppink' : 'white',textDecoration: 'none'
          
        })}> In progress </NavLink>
        </div>


      <div>
    
      <NavLink to="/complete"
        style={({ isActive }) => ({
          color: isActive ? 'deeppink' : 'white',textDecoration: 'none'
          
        })} > completed</NavLink>
       </div>
     
    </div>
  );
};

export default Filter;
