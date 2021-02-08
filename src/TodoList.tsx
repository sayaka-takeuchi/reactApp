import React, { FC } from 'react';

type TodoListPropsType = {
  text: string,
}

const TodoList: FC<TodoListPropsType> = (props) => {
  return (
    <li>
      {props.text}
    </li>
  )
}

export default TodoList;