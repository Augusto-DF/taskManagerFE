import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // eslint-disable-line import/no-extraneous-dependencies

import rootReducer from "../modules/reducers";

const configureStore = (initialState) => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === "development") {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  }
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
};

export default configureStore;
