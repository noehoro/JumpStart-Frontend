import React, { useState, useEffect } from 'react'
import './UserSignUp.css'
import '../signUp/PhaseOne'
import Button from 'react-bootstrap/button'
import PhaseOne from '../signUp/PhaseOne'

function UserSignUp(props) {

    const [prev, setPrev] = useState(true)
    const [next, setNext] = useState(true)



    return (

        <div >
            <PhaseOne />
        </div>
    )
}

export default UserSignUp
