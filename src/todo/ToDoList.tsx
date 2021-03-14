import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import ToDoListRow from './ToDoListRow';
import { State } from '../redux/store';
import { ToDo } from '../models/to-do.model';
import {Box, Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';


const ToDoList = () => {

const [toDoList, setToDoList] = useState<ToDo>({
  title: "",
  detail: "",
  deadline: "",
  completed: false,
})

  const history = useHistory();
  const addOnClick = () => {
    history.push("/to_dos/new");
  }

console.log(toDoList);
const toDosState = useSelector((state: State) => state.toDosReducer);
 console.log(toDosState);
  return (
    <div className="App">
      <h1 className="page-title">リスト一覧</h1>
      <Fab color="primary" aria-label="add" className="add-icon" onClick={addOnClick}>
        <AddIcon />
      </Fab>
      <ul className="lists">
        {toDosState.toDos.map((todo, index) => {
          return (
            <ToDoListRow key={index} id={index} todo={todo} setToDoList={setToDoList}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
