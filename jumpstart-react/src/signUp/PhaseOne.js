import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/button'


function PhaseOne(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <form class="formContainer">
            <input
                type="text"
                name="first_name"
                className="loginBox"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                name="last_name"
                className="loginBox"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                name="email"
                className="loginBox"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                className="loginBox"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </form>
    )
}
export default PhaseOne
