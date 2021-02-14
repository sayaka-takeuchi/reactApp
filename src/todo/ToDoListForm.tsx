import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toDosAction } from '../redux/to-dos.action';


const ToDoListForm = () => {
  const dispatch = useDispatch();
  const initialState = {
  title: '', 
  detail: '', 
  deadline:''
  }
  const [state, setState] = useState(initialState);

  const handleChange = (input: string) => (e: any) => {
    setState({...state, [input]: e.target.value });
  }

  return (
    <form action="">
      <div className="form-item">
        <label htmlFor="title" >
        タイトル:
        <input type="text"
          id="title"
          value={state.title}
          onChange={handleChange('title')}
        />
        </label>
      </div>
      <div className="form-item">
        <label htmlFor="detail">
          詳細:
        <input type="text"
        value={state.detail}
        onChange={handleChange('detail')}
        />
        </label>
      </div>
      <div className="form-item">
        <label htmlFor="deadline">
          期限:
        <input type="date"
        id="deadline"
        value={state.deadline}
        onChange={handleChange('deadline')}
        />
        </label>
      </div>
      <button 
        type="submit" 
        onClick={(e) => {
          e.preventDefault();
          dispatch(toDosAction.addToDo(state));
          setState(initialState);
        }}>
          送信
      </button>
    </form>
  )
}

export default ToDoListForm;