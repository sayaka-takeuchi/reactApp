import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.scss";
import { AiFillDelete, BiChevronRight } from "react-icons/all";
import { toDosAction } from "../redux/to-dos.action";
import { useDispatch } from "react-redux";
import { ToDo } from "../models/to-do.model";

type TodoListPropsType = {
  title: string,
  id: number,
  todo: ToDo,
  completed: boolean,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={`list__item ${props.completed? "completed" :""}`}>
      {props.title}
      <div className="icons">
        <AiFillDelete
          onClick={(e) => {
            e.preventDefault();
            dispatch(toDosAction.deleteToDo(props.todo))
          }}
        />
        <Link to={`/to_dos/${props.id}`}>
          <BiChevronRight className="list__item__next-icon"/>
        </Link>
      </div>
    </li>
  )
}

export default ToDoListRow;