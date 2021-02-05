import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoListData from './TodoLIstData';

const App = () => {
  return (
    <div className="App">
      <h1>TODOリスト</h1>
      <form action="">
        <input type="text"/>
        <button type="submit">送信</button>
      </form>
      <h2> リスト一覧</h2>
      <ul className="lists">
        {TodoListData.map((todo, index) => {
          return (
            <TodoList id={todo.id} text={todo.text} key={index} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
