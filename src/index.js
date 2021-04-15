import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import allReducers from './reducers/allReducers'
import appReducer from './reducers/appReducer'
import OwnerStatementContainer from './containers/OwnerStatementContainer'
import NavBar from './components/NavBar'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
    )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Route exact path="/" component={App}/>
      <Route exact path="/statements" component={OwnerStatementContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
