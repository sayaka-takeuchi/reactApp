import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type TodoListPropsType = {
  text: string,
  id: number,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  return (
    <li>
      <Link to={`/to_dos/${props.id}`}>
        {props.text}
      </Link>
    </li>
  )
}

export default ToDoListRow;