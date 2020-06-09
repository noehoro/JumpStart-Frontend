import React, { useState, useEffect } from 'react'
import './Login.css'
import Button from 'react-bootstrap/button'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import UserSignUp from './UserSignUp'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    /*const login = () => {
        const postData = { "email": email, "password": password }
        axios.post('http://localhost:5000/login', postData)
            .then(res => {
                if (res.data.valid) {
                    setErrorMsg('')
                    props.user(res.data.token, email)
                }
                else {
                    setErrorMsg(res.data.msg)
                }
            })
            .catch(error => { setErrorMsg(error.response.data.msg) })
    } */

    return (
        <div>
            <div className="welcomeHeader">
                <img className="logo" src={process.env.PUBLIC_URL + '/logo.jpeg'} />
            </div>
            <div className="loginContainer">
                <form method="POST" action="https://jumpstarthack.herokuapp.com/api/login" >
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
                        <Button className="loginButton" type="submit" >Login</Button>
                    </div>
                    <div className="errorMsg">Error box
                </div>
                    <hr className="saperateLine"></hr>
                </form>
                <div>
                    <h4>Not yet Registered?</h4>
                </div>
            </div>
        </div>
    )
}
export default Login