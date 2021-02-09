import React, { FC } from 'react';

type TodoListPropsType = {
  text: string,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  return (
    <li>
      {props.text}
    </li>
  )
}

export default ToDoListRow;