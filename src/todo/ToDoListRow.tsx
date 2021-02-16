import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.scss";
import { GrNext } from "react-icons/all";

type TodoListPropsType = {
  title: string,
  id: number,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  return (
    <li className='list__item'>
      {props.title}
      <Link to={`/to_dos/${props.id}`}>
        <GrNext className="list__item__next-icon"/>
      </Link>
    </li>
  )
}

export default ToDoListRow;