import { useSelector } from 'react-redux';
import { State } from "../redux/store";
import {BiMessageDetail, IoTimerOutline, TiPencil} from "react-icons/all";
import "../style/style.scss";
import {FC} from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

type ToDoDetailPropsType = {
  match: any;
  id: number;
}

const ToDoDetail: FC<ToDoDetailPropsType> = (props) => {
  const toDosState = useSelector((state: State) => state.toDosReducer );

  const id = props.match.params.id;
  return (
    <div className="wrapper">
      <h1>詳細</h1>
      <div className="list-item">
        <div className="list-item__title">
          <TiPencil className="list-item__icon"/>
          <h2>タイトル</h2>
        </div>
        <p>{toDosState.toDos[id].title}</p>
      </div>
      <div className="list-item">
        <div className="list-item__title">
          <BiMessageDetail className="list-item__icon"/>
          <h2>詳細</h2>
        </div>
        <p>{toDosState.toDos[id].detail}</p>
      </div>
      <div className="list-item">
        <div className="list-item__title">
          <IoTimerOutline className="list-item__icon"/>
          <h2>期限</h2>
        </div>
        <p>{toDosState.toDos[id].deadline}</p>
      </div>
      <Button variant="contained" color="primary">
        <Link to="/" className="list-item__link">一覧へ戻る</Link>
      </Button>
    </div>
  )
};

export default ToDoDetail;