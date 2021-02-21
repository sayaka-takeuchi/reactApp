import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toDosAction } from '../redux/to-dos.action';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

const ToDoListForm = () => {
  const dispatch = useDispatch();
  const initialState = {
  title: '',
  detail: '', 
  deadline:'',
  completed: false
  }
  const [state, setState] = useState(initialState);

  const handleChange = (input: string) => (e: any) => {
    setState({...state, [input]: e.target.value });
  }

  return (
    <form action="">
      <Box>
        <TextField 
          label="title"
          id="title"
          value={state.title}
          onChange={handleChange('title')} 
        />
      </Box>
      <Box>
        <TextField 
          label="detail"
          id="title"
          value={state.detail}
          onChange={handleChange('detail')} 
        />
      </Box>
      <Box mt={1}>
        <TextField
          id="deadline"
          label="deadline"
          type="date"
          InputLabelProps={{
          shrink: true,
          }}
          value={state.deadline}
          onChange={handleChange('deadline')}
        />
      </Box>
      <Box mt={2}>
        <Button
          variant="contained" 
          color="primary"
          type="submit" 
          onClick={(e) => {
            e.preventDefault();
            dispatch(toDosAction.addToDo(state));
            setState(initialState);
          }}>
            送信
        </Button>
      </Box>
    </form>
  )
}

export default ToDoListForm;