import * as actionType from "./actionsTypes";

// Using redux thunk to implement Async code
export const saveResult = (result) => {
  return {
    type: actionType.STORE_RESULT,
    resultPassed: result,
  };
};

export const store_result = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch(saveResult(result));
    }, 2000);
  };
};

export const delete_result = (id) => {
  return {
    type: actionType.DELETE_RESULT,
    resultElId: id,
  };
};
