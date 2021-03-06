import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./app/store";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import Counter from "./features/counter/Counter";

// function reducer() {
//   return {
//     text: "redux text",
//   };
// }
// // const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} id="drum-machine">
      <App />
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
