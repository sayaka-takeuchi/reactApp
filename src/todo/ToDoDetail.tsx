import { useSelector } from 'react-redux';
import { State } from "../redux/store";
import Button from '@material-ui/core/Button';
import {BiMessageDetail, IoTimerOutline, TiPencil} from "react-icons/all";
import "../style/style.scss";

const ToDoDetail = (props: any) => {
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
      <Button variant="contained" color="primary" href="/">一覧へ戻る</Button>
    </div>
  )
}

export default ToDoDetail;