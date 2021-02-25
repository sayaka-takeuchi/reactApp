import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import ToDoListRow from './ToDoListRow';
import { State } from '../redux/store';
import ToDoListForm from './ToDoListForm';
import { ToDo } from '../models/to-do.model';


const ToDoList = () => {

const [toDoList, setToDoList] = useState<ToDo>({
  title: "",
  detail: "",
  deadline: "",
  completed: false,
})

console.log(toDoList);
const toDosState = useSelector((state: State) => state.toDosReducer);
 console.log(toDosState);
  return (
    <div className="App">
      <ToDoListForm toDoList={toDoList}/>
      <h1 className="page-title">リスト一覧</h1>
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
