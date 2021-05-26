import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";

export type StoreInterface = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const thunkMiddleWares = [thunkMiddleware].filter(Boolean);
  const middleWares = applyMiddleware(...thunkMiddleWares);
  const store = createStore(rootReducer, middleWares);
  return store;
};

export default configureStore;
