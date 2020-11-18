import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

// How Middleware works
// first we create function which recives store as arrgument
const logger = (store) => {
  // then it will return another function which recives next as arrgument and it is simple just arrgument will let the function to continue it is journy to the reducer
  return (next) => {
    // then this function will recives action as a arrgument, so this nested functions is called a middleware
    return (action) => {
      // now this function has access to the action , next and the store
      console.log("[Middleware Dispatching]", action);
      // now here next() will let the action reach the reducer so we have to pass action as arrgument
      const result = next(action);
      console.log("[Middleware next state]", store.getState());
      return result;
      // then after all this we have to use redux by applymiddleware to excute this then we have to pass it to the store in the createStore and then pass to it the logger
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
