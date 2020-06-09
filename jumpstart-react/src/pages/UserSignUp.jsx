import React, { useState, useEffect } from 'react'
import './UserSignUp.css'
import '../signUp/PhaseOne'
import Button from 'react-bootstrap/button'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import PhaseOne from '../signUp/PhaseOne'

function UserSignUp(props) {
    const [phase, setPhase] = useState(1)
    const [prev, setPrev] = useState(true)
    const [next, setNext] = useState(true)
    const [phase1, setPhase1] = useState(false)
    const [phase2, setPhase2] = useState(false)
    const [phase3, setPhase3] = useState(false)
    const [phase4, setPhase4] = useState(false)




    const nextPhase = () => {
        let phaseNum = phase
        if (phase < 4) {
            setPrev(true)
            setPhase(phase + 1)
            phaseNum = phaseNum + 1
        }
        if (phase >= 3)
            setNext(false)

        if (phaseNum == 1)
            setPhase1(true)
        else
            setPhase1(false)
        if (phaseNum == 2)
            setPhase2(true)
        else
            setPhase2(false)
        if (phaseNum == 3)
            setPhase3(true)
        else
            setPhase3(false)
        if (phaseNum == 4)
            setPhase4(true)
        else
            setPhase4(false)

    }

    const prevPhase = () => {
        let phaseNum = phase
        if (phase > 1) {
            setPhase(phase - 1)
            phaseNum = phaseNum - 1
            setNext(true)
        }
        if (phase <= 2) {
            setPrev(false)
        }
        if (phaseNum == 1)
            setPhase1(true)
        else
            setPhase1(false)

        if (phaseNum == 2)
            setPhase2(true)
        else
            setPhase2(false)
        if (phaseNum == 3)
            setPhase3(true)
        else
            setPhase3(false)
        if (phaseNum == 4)
            setPhase4(true)
        else
            setPhase4(false)
    }

    return (
        <Router>
            <div >
                {phase1 && <Redirect to="/signUp/phaseOne" />}
                {phase2 && <Redirect to="/signUp/phaseTwo" />}
                {phase3 && <Redirect to="/signUp/phaseThree" />}
                {phase4 && <Redirect to="/signUp/phaseFour" />}
                <div className="phaseBar">
                    <div className="phaseButton">
                        <Link to="/signUp/phaseOne">1
                        </Link>
                    </div>
                    <div className="phaseButton">
                        <Link to="/signUp/phaseTwo">2
                        </Link>
                    </div>
                    <div className="phaseButton">
                        <Link to="/signUp/phaseThree">3
                        </Link>
                    </div>
                    <div className="phaseButton">
                        <Link to="/signUp/phaseFour">4
                        </Link>
                    </div>
                </div>


            </div>
            <Switch>
                <Route path={["/signUp", "/signUp/phaseOne"]}>
                    <PhaseOne />
                </Route>
            </Switch>
            {prev ? <Button className="nextButton" onClick={prevPhase}>back</Button> : <Button className="nextButton" disabled>back</Button>}
            {next ? <Button className="nextButton" onClick={nextPhase}>next</Button> : <Button className="nextButton" disabled>next</Button>}
        </Router>
    )
}

export default UserSignUp
