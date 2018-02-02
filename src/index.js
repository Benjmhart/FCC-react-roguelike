import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import App from './components/App';

 const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

//add an event listener and fire redux
//onload store.dispatch(action(arg))
//2 actions,   one to get the window size and one to get the savedgame from local storage
//one action gets an event listener(windowsize).  


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
