import React, { FC } from "react";
import {IconType} from "react-icons";

type toDoDetailItemPropsType = {
  title: string,
  value: string,
  icon: IconType,
}

const ToDoDetailItem: FC<toDoDetailItemPropsType> = (props) => {
  const Icon = props.icon;
  return (
    <div className="list-item">
      <div className="list-item__title">
        {<Icon className="list-item__icon"/>}
        <h2>{props.title}</h2>
      </div>
      <p>{props.value}</p>
    </div>
  )
}

export default  ToDoDetailItem;