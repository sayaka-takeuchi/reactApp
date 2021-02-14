import actionCreatorFactory from "typescript-fsa";
import { ToDo } from "../models/to-do.model";

const actionCreator = actionCreatorFactory();

// typeが'ADD_TODO'でpayloadがsting型のアクション
export const toDosAction = {  
  addToDo: actionCreator<ToDo>('ADD_TODO')
}