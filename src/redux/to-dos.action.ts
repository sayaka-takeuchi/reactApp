import actionCreatorFactory from "typescript-fsa";
import { ToDo } from "../models/to-do.model";

const actionCreator = actionCreatorFactory();

export enum ToDosActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

// typeが'ADD_TODO'でpayloadがToDo型のアクション
export const toDosAction = {  
  addToDo: actionCreator<ToDo>(ToDosActionTypes.ADD_TODO),
  deleteToDo: actionCreator<ToDo>(ToDosActionTypes.DELETE_TODO)
}