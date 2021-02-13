import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from "../redux/store";

const ToDoDetail = (props: any) => {
  const toDosState = useSelector((state: State) => state.toDosReducer );

  const id = props.match.params.id;
  return (
    <div>
      <h1>詳細</h1>
      <p>タイトル</p>
      <p>{toDosState.toDos[id].text}</p>
      <p>詳細</p>
      <p>期限</p>
      <Link to='/'>一覧へ戻る</Link>
    </div>
  )
}

export default ToDoDetail;