import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import ToDoListRow from './ToDoListRow';
import { State } from '../redux/store';
import ToDoListForm from './ToDoListForm';


const ToDoList = () => {
const toDosState = useSelector((state: State) => state.toDosReducer);

  return (
    <div className="App">
      <h1>TODOリスト</h1>
      <ToDoListForm />
      <h2>リスト一覧</h2>
      <ul className="lists">
        {toDosState.toDos.map((todo, index) => {
          return (
            <ToDoListRow title={todo.title} key={index} id={index}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
