import { VisibilityFilters } from '../../actions/todos/const';

function visibilityFilters (state = VisibilityFilters.FRONT, action) {
  const casePack = {
    [VisibilityFilters.FRONT] () {
      return {
        visibilityFilters: action.filter
      }
    },
    [VisibilityFilters.BACK] () {
      return {
        visibilityFilters: action.filter
      }
    }
  };

  if (casePack.hasOwnProperty(action.type)) {
    return casePack[action.type]();
  } else {
    return state;
  }
}

export default visibilityFilters;