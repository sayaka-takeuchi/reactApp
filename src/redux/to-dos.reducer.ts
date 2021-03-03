import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ToDo } from "../models/to-do.model";
import { toDosAction } from "./to-dos.action";

// Stateの型を指定
export type ToDosState = {
  toDos: ToDo[];
}

// 指定した型を用いて初期値を指定
export const initialToDosState: ToDosState = {
  toDos: [
    {
      title: "振り込み",
      detail: "銀行で振り込みを済ませる",
      deadline: "2021/3/31",
      completed: false
    }
  ],
};

export const toDosReducer = reducerWithInitialState(initialToDosState)
  .case(toDosAction.addToDo,(state,action) => {
    return {...state,  toDos: state.toDos.concat([action])}
  })
  .case(toDosAction.deleteToDo,(state,action) => {
    return {...state, toDos: state.toDos.filter((toDo) => toDo !== action )}
  })
  .case(toDosAction.completed, (state,action) => {
    return {...state, toDos: state.toDos.map(todo => todo === action? {...todo, completed: !todo.completed} : todo)}
  })
  // .case(toDosAction.getToDo,(state,action) => {
  //   return {...state, toDos: state.toDos.filter((toDo) => toDo === action)}
  // })