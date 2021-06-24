import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
class UserLogin extends Component {

    render() {
        return (
            <div className="welcome">
                <h3>Login</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Username</label>
                        <input type="username" value={this.props.username} name="username" onChange={this.props.handleChange}/><br></br>
                    <label>Password</label>
                        <input type="password" value={this.props.password} name="password" onChange={this.props.handleChange}/><br></br>
                    
                    <input type="submit" value="Login"/>
                </form>
                <Link className="link" to="/signup">Signup</Link>
            </div>
        )
    }
}

export default UserLogin;