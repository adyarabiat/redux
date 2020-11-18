import * as actionType from "../actions/actionsTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };

    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.resultPassed,
        }),
      };
    case actionType.DELETE_RESULT:
      //  Check the explaination file
      const newArr = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: newArr,
      };
    default:
      return state;
  }
};

export default reducer;
