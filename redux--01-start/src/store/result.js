import * as actionTypes from "./actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.result, id: new Date() })
        //use concat instead of push so you don't mutate the state
      };
    case actionTypes.DELETE_RESULT:
      console.log("from the reducer");
      const updatedArray = state.results.filter(item => {
        return item.id != action.resultId;
      });

      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
