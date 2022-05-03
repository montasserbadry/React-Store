import React, { PureComponent } from "react";
import store from "./store";
import { Provider } from "react-redux";
import AllRoutes from "./allroutes";

import Header from "./component/Header";

import "./styles/global.scss";

class App extends PureComponent{
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <AllRoutes />
        </Provider>
      </div>
    );
  }
}

export default App;
