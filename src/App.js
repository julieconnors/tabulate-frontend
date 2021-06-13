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

  state = {
    user: ""
  }

  async findUser() {
    const id = localStorage.getItem('id')
      const res = await fetch(`http://localhost:3001/api/v1/users/${id}`); 
      const json = await res.json()
      this.setState({
        user: json.user.data.attributes
      })
  }

  setUser() {
    if(this.props.user.user || this.state.user) {
      let currentUser = (this.props.user.user) ? this.props.user.user : this.state.user
      return currentUser
    } else if(localStorage.getItem('token') && this.state.user === "") {
      this.findUser()
      return this.state.user
    } else {
      let currentUser = ""
      return currentUser
    }
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
                  <Login />  
                )}
              />
              <Route path="/signup" 
                render={() => (
                  <Signup />
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
