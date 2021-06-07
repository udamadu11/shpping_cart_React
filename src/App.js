import React from "react";
import { Provider } from "react-redux";
import AppData from "./component/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "./Store/store";
import Header from "./component/Header/Header";
import Checkout from "./component/Checkout/Checkout";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AppData />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
