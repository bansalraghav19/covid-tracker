import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./screens/routes/index";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";
import "./App.css";

const store = configureStore();

const App = () : JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
