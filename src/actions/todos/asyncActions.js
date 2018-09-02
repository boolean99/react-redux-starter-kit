import * as syncActions from './actionCreators';

// async Action
export function fetchPostsAsync (postNumber) {
  return (dispatch, getState) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${ postNumber }`)
        .then(response => response.json())
        .then(json => {
          dispatch(syncActions.addTodoSync(json));
        })
  }
}