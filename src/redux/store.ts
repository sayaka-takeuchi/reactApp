import { combineReducers, createStore } from "redux";
import { toDosReducer } from "./to-dos.reducer";

const store = createStore(combineReducers({toDosReducer}))
export type GetState = typeof store.getState;
export type State = ReturnType<GetState>;

export default store;

