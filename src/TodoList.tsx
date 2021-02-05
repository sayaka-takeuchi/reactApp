import React, { FC } from 'react';

type TodoListPropsType = {
  id: number,
  text: string,
}

const TodoList: FC<TodoListPropsType> = (props) => {
  return (
    <li>
      {props.id}: {props.text}
    </li>
  )
}

export default TodoList;