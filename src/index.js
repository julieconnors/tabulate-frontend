import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import allReducers from './reducers/allReducers'
// import appReducer from './reducers/appReducer'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store is set up with root reducer(allReducers) which sets initial state
const store = createStore(allReducers, 
  composeEnhancers(
    applyMiddleware(thunk)
    )
);

// using render function from react-dom
// App wrapped by Provider is passed as element argument
// container argument is the html element with 'root' id
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
