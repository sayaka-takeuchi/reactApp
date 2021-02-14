import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type TodoListPropsType = {
  title: string,
  id: number,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  return (
    <li>
      <Link to={`/to_dos/${props.id}`}>
        {props.title}
      </Link>
    </li>
  )
}

export default ToDoListRow;