import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from "../redux/store";

const ToDoDetail = (props: any) => {
  const toDosState = useSelector((state: State) => state.toDosReducer );

  const id = props.match.params.id;
  return (
    <div>
      <h1>詳細</h1>
      <div className="list-item">
        <h2>タイトル</h2>
        <p>{toDosState.toDos[id].title}</p>
      </div>
      <div className="list-item">
        <h2>詳細</h2>
        <p>{toDosState.toDos[id].detail}</p>
      </div>
      <div className="list-item">
        <h2>期限</h2>
        <p>{toDosState.toDos[id].deadline}</p>
      </div>
      <Link to='/'>一覧へ戻る</Link>
    </div>
  )
}

export default ToDoDetail;