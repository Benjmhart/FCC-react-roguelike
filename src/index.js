import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import App from './components/App';
import setSize from './actions/action_setSize'

 const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

window.addEventListener("load", () => {store.dispatch(setSize(window.innerWidth, window.innerHeight))});
window.addEventListener("resize", () => {store.dispatch(setSize(window.innerWidth, window.innerHeight))});
//onload store.dispatch(action(arg))
//2 actions,   one to get the window size and one to get the savedgame from local storage


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
