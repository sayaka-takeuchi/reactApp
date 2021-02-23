import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import ToDoListRow from './ToDoListRow';
import { State } from '../redux/store';
import ToDoListForm from './ToDoListForm';


const ToDoList = () => {
const toDosState = useSelector((state: State) => state.toDosReducer);
 console.log(toDosState);
  return (
    <div className="App">
      <ToDoListForm />
      <h1 className="page-title">リスト一覧</h1>
      <ul className="lists">
        {toDosState.toDos.map((todo, index) => {
          return (
            <ToDoListRow title={todo.title} key={index} id={index} todo={todo} completed={todo.completed}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
