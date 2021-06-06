import React from "react";
import { Provider } from "react-redux";
import AppData from "./component/App";

import store from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <AppData />
    </Provider>
  );
}

export default App;
