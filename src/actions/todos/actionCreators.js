import * as types from './const';

// action creator
export function addTodoSync (payLoad) {
  return {
    type: types.ADD_TODO,
    payLoad
  }
}
