import * as types from './const';

// action producer
export function addTodoSync (payLoad) {
  return {
    type: types.ADD_TODO,
    payLoad
  }
}
