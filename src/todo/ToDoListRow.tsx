import React, { FC } from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../style/style.scss";
import { AiFillDelete, BiChevronRight, BiEdit } from "react-icons/all";
import { toDosAction } from "../redux/to-dos.action";
import { useDispatch } from "react-redux";
import { ToDo } from "../models/to-do.model";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type TodoListPropsType = {
  id: number,
  todo: ToDo,
  setToDoList: React.Dispatch<React.SetStateAction<ToDo>>,
}

const ToDoListRow: FC<TodoListPropsType> = (props) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li className={`list__item ${props.todo.completed? "completed" :""}`}>
      {props.todo.title}
      <div className="icons">
        <BiEdit 
          // onClick={() => {props.setToDoList(props.todo)}}
          onClick={() => {history.push("/to_dos/new")}}
        />
        <AiFillDelete
          onClick={handleClickOpen}
        />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p>リストを削除します。</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>削除したリストは元には戻せません。<br/>削除を実行する場合は「削除」をクリックしてください。</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              dispatch(toDosAction.deleteToDo(props.todo))
              handleClose()
            }}
            color="secondary"
          >
            削除
          </Button>
        </DialogActions>
      </Dialog>
        <Link to={`/to_dos/${props.id}`}>
          <BiChevronRight className="list__item__next-icon"/>
        </Link>
      </div>
    </li>
  )
}

export default ToDoListRow;