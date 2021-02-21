import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { State } from "../redux/store";
import {　BiMessageDetail, IoTimerOutline, TiPencil　} from "react-icons/all";
import "../style/style.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { toDosAction } from "../redux/to-dos.action";
import ToDoDetailItem from "./ToDoDetailItem";

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
      <ToDoDetailItem title={"タイトル"} value={toDo.title} icon={TiPencil}/>
      <ToDoDetailItem title={"詳細"} value={toDo.detail} icon={BiMessageDetail} />
      <ToDoDetailItem title={"期限"} value={toDo.deadline} icon={IoTimerOutline} />
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