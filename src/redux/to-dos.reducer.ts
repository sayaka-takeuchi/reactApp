import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ToDo } from "../models/to-do.model";
import { toDosAction } from "./to-dos.action";

export type ToDosState = {
  toDos: ToDo[];
}

export const initialToDosState: ToDosState = {
  toDos:　[],
};

export const toDosReducer = reducerWithInitialState(initialToDosState)
  .case(toDosAction.addToDo,(state,text) => {
    state.toDos.push({text})
    return { ...state }
  })