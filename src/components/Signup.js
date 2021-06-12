import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/addUser';
import { Link } from 'react-router-dom'
import '../App.css'

class Signup extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            ...this.state
        } 

        this.props.addUser(newUser)
        this.loginUser()
        this.setState({
            username: "",
            password: ""
        })
    }

    loginUser() {
        let token = this.props.user.jwt
        this.props.setToken(token)
    }

    render() {
        return (
            <div className="welcome">
                <h3>Signup</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input type="username" value={this.state.username} name="username" onChange={this.handleChange}/><br></br>
                    <label>Password</label>
                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/><br></br>
                    
                    <input type="submit" value="Signup"/>
                </form>
                <Link className="link" to="/login">Login</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUser })(Signup);