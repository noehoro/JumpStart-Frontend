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
        const postData = { "username": userName, "password": password }
        axios.post('https://jumpstarthack.herokuapp.com/api/login', postData)
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
                <div >
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
                </div>
            </div>

        </div>
    )
}
export default Login