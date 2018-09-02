import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { VisibilityFilters } from './actions/todos/const';
import rootReducer from "./reducers/index";

const preloadedState = {
  visibilityFilters: VisibilityFilters.FRONT,
  todos: []
}

/*
* Chrome 리덕스 디버깅 툴의 기능을 제한할 수 있습니다.
* 자세한 내용은 아래 주소에서 확인해주세요.
* https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig
*/
let store;

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({
    // actionsBlacklist: ['ADD_TODO']
  });
  store = createStore(rootReducer, preloadedState, composeEnhancers(
      applyMiddleware(thunkMiddleware)
  ));
} else {
  store = createStore(rootReducer, preloadedState, applyMiddleware(
      thunkMiddleware
  ));
}

export default store;