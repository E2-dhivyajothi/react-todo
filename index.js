import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
//import App from "./finalone/App";
import Approutes from "./todotask/routes";
//import App from "./todoreactt/App";

ReactDOM.render(   
  <BrowserRouter>
  <Approutes/>          
</BrowserRouter>,

document.getElementById("root")
);
//root.render(
  //<BrowserRouter>
    //<App/>
  //</BrowserRouter>
//);