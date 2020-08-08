import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ToDoAdd from './ToDoAdd';

function App() {

  const[items,addItems]=useState("");
  const[display,setDisplay]=useState([]);
  const showItems=(event)=>{
    addItems(event.target.value);
    }
    
    const listofitems=()=>{
         setDisplay((preVal)=>{
         return [...preVal,items];
      });
      addItems("");
    }
    
  return (
  <>
  <div className="maindiv">
    <div className="centerdiv">
      <h1>ToDoList</h1>
      <input type="text" placeholder="enter todo" value={items} onChange={showItems}/>
       <Button className="newBtn" onClick={listofitems}>
        <AddIcon/>
      </Button> 
    
      <ol>
      {/* <li>{items}</li> */}
     {display.map((val,index)=>{
        return <ToDoAdd title={val}
                         key={index}/>
      })}
        
      </ol>
    </div>
  </div>
  </>
  );
}

export default App;
