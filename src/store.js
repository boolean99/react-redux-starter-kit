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
* 1. enable chrome dev tool of redux
* you can restrict dev tool inspector by adding key to composeEnhancers const
* see more available list here
* https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig
*/
const composeEnhancers = composeWithDevTools({
  // actionsBlacklist: ['ADD_TODO']
});
const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

/*
* 2. disable chrome dev tool of redux
const store = createStore(rootReducer, preloadedState, applyMiddleware(
    thunkMiddleware
));
*/

export default store;