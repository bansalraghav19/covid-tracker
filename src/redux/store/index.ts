import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";

const configureStore = () => {
  const thunkMiddleWares = [thunkMiddleware].filter(Boolean);
  const middleWares = applyMiddleware(...thunkMiddleWares);
  const store = createStore(rootReducer, middleWares);
  return store;
};

export default configureStore;
