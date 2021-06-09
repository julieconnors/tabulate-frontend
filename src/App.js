import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
class App extends Component {

  setToken(userToken) {
    sessionStorage.setItem('token', userToken);
  }
  
  render(){
    const currentUser = this.props.user.user

    if (!!currentUser) {
      return <Home/>
    } else {
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
