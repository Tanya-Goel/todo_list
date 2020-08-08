import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


  const ToDoAdd=(props)=>{
  const[line,setLine]=useState(false);
    const cutIt=()=>{
     setLine(true);
    }
    return (<>
      <div className="todostyle">
        <li style={{textDecoration:line?"line-through":"none"}}>{props.title}</li>
         <Button onClick={cutIt} aria-label="delete">
            <DeleteIcon className="deleteIcon" />
          </Button>   
          </div>
        </>);
  };

  export default ToDoAdd;