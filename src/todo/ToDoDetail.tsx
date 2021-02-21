import { useSelector, useDispatch } from 'react-redux';
import { State } from "../redux/store";
import {　BiMessageDetail, IoTimerOutline, TiPencil　} from "react-icons/all";
import "../style/style.scss";
import React, {FC} from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { toDosAction } from "../redux/to-dos.action";

type ToDoDetailPropsType = {
  match: any;
  id: number;
}

const ToDoDetail: FC<ToDoDetailPropsType> = (props) => {
  const toDosState = useSelector((state: State) => state.toDosReducer );
  const dispatch = useDispatch();

  const id = props.match.params.id;
  const toDo = toDosState.toDos[id];

  return (
    <div className="wrapper">
      <h1>詳細</h1>
      <div className="list-item">
        <div className="list-item__title">
          <TiPencil className="list-item__icon"/>
          <h2>タイトル</h2>
        </div>
        <p>{toDo.title}</p>
      </div>
      <div className="list-item">
        <div className="list-item__title">
          <BiMessageDetail className="list-item__icon"/>
          <h2>詳細</h2>
        </div>
        <p>{toDo.detail}</p>
      </div>
      <div className="list-item">
        <div className="list-item__title">
          <IoTimerOutline className="list-item__icon"/>
          <h2>期限</h2>
        </div>
        <p>{toDo.deadline}</p>
      </div>
      <div className="list-item__buttons">
        <Button variant="contained" color="primary">
          <Link to="/" className="list-item__link">一覧へ戻る</Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toDosAction.completed(toDo));
          }}
        >
          {toDosState.toDos[id].completed? "取り消し" : "完了"}
        </Button>
      </div>
    </div>

  )
};

export default ToDoDetail;