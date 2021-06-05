import React, { Component } from 'react';

class Login extends Component {

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
        debugger
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input type="username" value={this.state.username} name="username" onChange={this.handleChange}/><br></br>
                    <label>Password</label>
                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/><br></br>
                    
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login;