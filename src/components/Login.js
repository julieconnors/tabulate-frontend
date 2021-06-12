import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/authenticateUser';
import '../App.css'


class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.trim()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.authenticateUser(this.state)
    }

    render() {
        return (
            <div className="welcome">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input type="username" value={this.state.username} name="username" onChange={this.handleChange}/><br></br>
                    <label>Password</label>
                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/><br></br>
                    
                    <input type="submit" value="Login"/>
                </form>
                <Link className="link" to="/signup">Signup</Link>
            </div>
        )
    }
}

export default connect(null, { authenticateUser })(Login);