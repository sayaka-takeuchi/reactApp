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
      title:　"振り込み",
      detail: "銀行で振り込みを済ませる",
      deadline: "2021/3/31"
    }
  ],
};

// 初期値を作成
export const toDosReducer = reducerWithInitialState(initialToDosState)
// 状態(state)とアクション(action)を引数にとる
// toDosActionのaddTodoの時にreturn内を実行する
  .case(toDosAction.addToDo,(state,action) => {
    state.toDos.push( {...action} )
    return { ...state }
  })