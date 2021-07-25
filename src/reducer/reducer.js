export const initialState = {
  term: null
};

// Dispatched action
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM"
};

// Listening for dispatched action

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term
      };
    default: 
      return state;
  }
}

export default reducer;