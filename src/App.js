import React, { Component } from 'react';
import Welcome from './components/Welcome'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import DaySheetContainer from './containers/DaySheetContainer';
import StatementContainer from './containers/StatementContainer'

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {

  setToken(userToken) {
    localStorage.setItem('token', userToken);
  }
  
  render(){
    const currentUser = this.props.user.user

    if (!!currentUser) {
      return (
        <div>
          <Router>
            <NavBar />
            <Switch>
              
              <Route path="/day-sheet"
                render={() => (
                  <DaySheetContainer currentUser={currentUser} />  
                )}
              />
              <Route path="/statements"
                render={() => (
                  <StatementContainer currentUser={currentUser} />  
                )}
              />
              <Route path="/"
                render={() => (
                  <Home currentUser={currentUser} />  
                )}
              />
            </Switch>
          </Router>
        </div>
      )} else {
      return (
        <div className="App">
          <h1>Welcome to Tabulate!</h1>          
          <Router>
            <Switch>
              <Route path="/login"
                render={() => (
                  <Login setToken={() => this.setToken()}/>  
                )}
              />
              <Route path="/signup" 
                render={() => (
                  <Signup setToken={() => this.setToken()}/>
                  )}
              />
              <Route path="/" component={Welcome}/>
            </Switch>
          </Router>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
