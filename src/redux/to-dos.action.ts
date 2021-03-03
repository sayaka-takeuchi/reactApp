import actionCreatorFactory from "typescript-fsa";
import { ToDo } from "../models/to-do.model";

const actionCreator = actionCreatorFactory();

export enum ToDosActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETED = "COMPLETED",
  // GET_TODO = "GET_TODO"
}

// typeが'ADD_TODO'でpayloadがToDo型のアクション
export const toDosAction = {  
  addToDo: actionCreator<ToDo>(ToDosActionTypes.ADD_TODO),
  deleteToDo: actionCreator<ToDo>(ToDosActionTypes.DELETE_TODO),
  completed: actionCreator<ToDo>(ToDosActionTypes.COMPLETED),
  // getToDo: actionCreator<ToDo>(ToDosActionTypes.GET_TODO)
}