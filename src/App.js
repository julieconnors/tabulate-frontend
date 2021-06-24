import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Home from './containers/Home'
import UserLogin from './components/UserLogin'
import Signup from './components/Signup'
import { authenticateUser } from './actions/authenticateUser';
import { findUser } from './actions/findUser';
import { logoutUser } from './actions/logoutUser';

import DaySheetContainer from './containers/DaySheetContainer';
import StatementContainer from './containers/StatementContainer'

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {

  constructor() {
    super()
    this.state = {
      user: {},
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
          [event.target.name]: event.target.value.trim()
    })
}

  handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.authenticateUser(user)
  }

  setUser() {
    if(this.props.user.user) {
      let currentUser = this.props.user.user.data.attributes
      return currentUser
    } else if(localStorage.getItem('token') && !this.props.user.user) {
      const id = localStorage.getItem('id')
      this.props.findUser(id)
    } else {
      let currentUser = ""
      return currentUser
    }
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.logoutUser()
  }
  
  render(){
    const currentUser = this.setUser()

    if (!!currentUser) {
      return (
        <div>
          <Router>
            <NavBar />
            <Switch>
              
              <Route path="/day-sheet"
                render={(props) => (
                  <DaySheetContainer currentUser={currentUser} />  
                )}
              />
              <Route path="/statements"
                render={(props) => (
                  <StatementContainer currentUser={currentUser} />  
                )}
              />
              <Route path="/"
                render={(props) => (
                  <Home currentUser={currentUser} handleLogout={this.handleLogout.bind(this)} />  
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
              <Route path="/signup" 
                render={() => (
                  <Signup />
                  )}
              />
              <Route path="/"
                render={() => (
                  <UserLogin handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)} username={this.props.username} password={this.props.password} />  
                )}
              />
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

export default connect(mapStateToProps, { authenticateUser, logoutUser, findUser })(App);
