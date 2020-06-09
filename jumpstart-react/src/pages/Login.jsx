import React, { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import Button from 'react-bootstrap/button'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import UserSignUp from './UserSignUp'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState('')

    const login = () => {
        const postData = { "userName": userName, "password": password }
        axios.post('http://localhost:5000/login', postData)
            .then(res => {
                if (res.data.id) {
                    setId(res.data.id)
                }
                else {
                    setId(false)
                }
            })
    }

    return (
        <div>
            <div className="welcomeHeader">
                <img className="logo" src={process.env.PUBLIC_URL + '/logo.jpeg'} />
            </div>
            <div className="loginContainer">
                <div action="https://jumpstarthack.herokuapp.com/api/login" >
                    <h1 className="loginHeader">Login</h1>
                    <input
                        type="text"
                        name="userName"
                        className="loginBox"
                        placeholder="User name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        className="loginBox"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <Button className="loginButton" onClick={login} >Login</Button>
                    </div>
                    <div className="errorMsg">Error box
                </div>
                    <hr className="saperateLine"></hr>
                </div>
                <div>
                    <h4>Not yet Registered?</h4>
                </div>
            </div>
        </div>
    )
}
export default Login