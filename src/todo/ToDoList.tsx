import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import ToDoListRow from './ToDoListRow';
import { toDosAction } from '../redux/to-dos.action';
import { useState } from 'react';
import { State } from '../redux/store';


const ToDoList = () => {
const dispatch = useDispatch();
const toDosState = useSelector((state: State) => state.toDosReducer );
const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>TODOリスト</h1>
      <form action="">
        <input type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          type="submit" 
          onClick={(e) => {
            e.preventDefault();
            dispatch(toDosAction.addToDo(text));
            setText('');
          }}>
            送信
        </button>
      </form>
      <h2>リスト一覧</h2>
      <ul className="lists">
        {toDosState.toDos.map((todo, index) => {
          return (
            <ToDoListRow text={todo.text} key={index} id={index}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
