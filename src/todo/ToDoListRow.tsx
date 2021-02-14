import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.scss";

type TodoListPropsType = {
  title: string,
  id: number,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  return (
    <li className='list__item'>
      <Link to={`/to_dos/${props.id}`}>
        {props.title}
      </Link>
    </li>
  )
}

export default ToDoListRow;