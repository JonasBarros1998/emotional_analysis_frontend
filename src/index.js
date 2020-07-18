import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducers } from './reducer'

/**IMPORTS CSS**/
import './__assets__/styles/bootstrap.min.css';
import './__assets__/styles/style.css';
import './__assets__/styles/main.css';

/**IMPORTS JAVASCRIPT **/
/*
import './__assets__/js/jquery-3.2.1.min.js';
import './__assets__/js/popper.min.js';
import './__assets__/js/bootstrap.min.js';
import './__assets__/js/main.js';*/

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
        <React.StrictMode>
        <App />
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
