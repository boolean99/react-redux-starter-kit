import { combineReducers } from 'redux';
import todos from './todos/index';
import visibilityFilters from './visibilityFilters/index';

const rootReducer = combineReducers({
  todos,
  visibilityFilters
});

export default rootReducer;
