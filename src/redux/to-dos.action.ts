import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const toDosAction = {
  addToDo: actionCreator<string>('ADD_TODO')
}