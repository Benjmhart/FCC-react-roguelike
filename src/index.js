import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import App from './components/App';
import setSize from './actions/action_setSize'
import preLoad from "./actions/action_preLoad"

 const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
// sets saved game and window size
window.addEventListener("load", () => {store.dispatch(setSize(window.innerWidth, window.innerHeight))});
window.addEventListener("resize", () => {store.dispatch(setSize(window.innerWidth, window.innerHeight))});
window.addEventListener("load", () => {store.dispatch(preLoad())})



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
