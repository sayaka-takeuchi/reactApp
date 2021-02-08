import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

// typeが'ADD_TODO'でpayloadがsting型のアクション
export const toDosAction = {  
  addToDo: actionCreator<string>('ADD_TODO')
}