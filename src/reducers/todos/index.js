function todos (state = [], action) {
  const casePack = {
    ADD_TODO () {
      return [
        ...state,
        action.payLoad
      ]
    }
  };

  if (casePack.hasOwnProperty(action.type)) {
    return casePack[action.type]();
  } else {
    return state;
  }
}

export default todos;