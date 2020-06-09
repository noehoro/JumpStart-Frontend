import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/button'
import './Login.css'
import Slider from 'react-input-slider';


function BuildProfile(props) {
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [yoga, setYoga] = useState("0")
    const [meditation, setMeditation] = useState("0")
    const [TRX, setTRX] = useState("0")
    const [cityTour, setCityTour] = useState("0")
    const [hiking, setHiking] = useState("0")
    const [pubCrawl, setPubCrawl] = useState("0")
    const [lecture, setLecture] = useState("0")
    const [woodwork, setWoodwork] = useState("0")
    const [standUp, setStandUp] = useState("0")
    const [dinner, setDinner] = useState("0")
    const [boardGame, setBoardGame] = useState("0")
    const [escapeRoom, setEscapeRoom] = useState("0")
    const [beer, setBeer] = useState({ x: 5 });
    const [cat, setCat] = useState({ x: 5 });
    const [pool, setPool] = useState({ x: 5 });
    const [gina, setGina] = useState({ x: 5 });

    const submit = () => {
    }


    return (
        <div className="formContainer">
            <input
                type="text"
                name="fullname"
                className="inputBox"
                placeholder="Please enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <input
                type="text"
                name="gender"
                className="inputBox"
                placeholder="Please enter your gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <input
                type="text"
                name="email"
                className="inputBox"
                placeholder="Please enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="username"
                className="inputBox"
                placeholder="Please choose User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                name="password"
                className="inputBox"
                placeholder="Please choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <hr className="line" />
            <div>
                {yoga === "0" ?
                    <button className="box" onClick={() => setYoga("1")}>Yoga</button> :
                    <button className="lightBox" onClick={() => setYoga("0")}>Yoga</button>
                }
                {meditation === "0" ?
                    <button className="box" onClick={() => setMeditation("1")}>Meditation</button> :
                    <button className="lightBox" onClick={() => setMeditation("0")}>Meditation</button>
                }
                {TRX === "0" ?
                    <button className="box" onClick={() => setTRX("1")}>TRX</button> :
                    <button className="lightBox" onClick={() => setTRX("0")}>TRX</button>
                }
            </div>
            <div>
                {cityTour === "0" ?
                    <button className="box" onClick={() => setCityTour("1")}>City Tour</button> :
                    <button className="lightBox" onClick={() => setCityTour("0")}>City Tour</button>
                }
                {hiking === "0" ?
                    <button className="box" onClick={() => setHiking("1")}>Hiking</button> :
                    <button className="lightBox" onClick={() => setHiking("0")}>Hiking</button>
                }
                {pubCrawl === "0" ?
                    <button className="box" onClick={() => setPubCrawl("1")}>Pub Crawl</button> :
                    <button className="lightBox" onClick={() => setPubCrawl("0")}>Pub Crawl</button>
                }
            </div>
            <div>
                {lecture === "0" ?
                    <button className="box" onClick={() => setLecture("1")}>Lecture</button> :
                    <button className="lightBox" onClick={() => setLecture("0")}>Lecture</button>
                }
                {woodwork === "0" ?
                    <button className="box" onClick={() => setWoodwork("1")}>Wood Work</button> :
                    <button className="lightBox" onClick={() => setWoodwork("0")}>Wood Work</button>
                }
                {standUp === "0" ?
                    <button className="box" onClick={() => setStandUp("1")}>Stand-Up</button> :
                    <button className="lightBox" onClick={() => setStandUp("0")}>Stand-Up</button>
                }
            </div>
            <div>
                {dinner === "0" ?
                    <button className="box" onClick={() => setDinner("1")}>Dinner</button> :
                    <button className="lightBox" onClick={() => setDinner("0")}>Dinner</button>
                }
                {boardGame === "0" ?
                    <button className="box" onClick={() => setBoardGame("1")}>Board Game</button> :
                    <button className="lightBox" onClick={() => setBoardGame("0")}>Board Game</button>
                }
                {escapeRoom === "0" ?
                    <button className="box" onClick={() => setEscapeRoom("1")}>Escape Room</button> :
                    <button className="lightBox" onClick={() => setEscapeRoom("0")}>Escape Room</button>
                }
            </div>
            <hr className="line" />
            <div className="slideCon">
                <div className="slider">
                    <img className="icon" src={process.env.PUBLIC_URL + '/beer.png'} />
                    <Slider
                        axis="x"
                        xstep={1}
                        xmin={0}
                        xmax={10}
                        x={beer.x}
                        onChange={({ x }) => setBeer({ x: parseFloat(x.toFixed(2)) })}
                        styles={{
                            track: {
                                backgroundColor: 'rgb(121, 110, 223)'
                            },
                            active: {
                                backgroundColor: 'rgb(211, 173, 155)'
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                opacity: 0.8
                            }
                        }}
                    />
                    <img className="icon" src={process.env.PUBLIC_URL + '/wine.png'} />
                </div>
                <div className="slider">
                    <img className="icon" src={process.env.PUBLIC_URL + '/cat.png'} />
                    <Slider
                        axis="x"
                        xstep={1}
                        xmin={0}
                        xmax={10}
                        x={cat.x}
                        onChange={({ x }) => setCat({ x: parseFloat(x.toFixed(2)) })}
                        styles={{
                            track: {
                                backgroundColor: 'rgb(121, 110, 223)'
                            },
                            active: {
                                backgroundColor: 'rgb(211, 173, 155)'
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                opacity: 0.8
                            }
                        }}
                    />
                    <img className="icon" src={process.env.PUBLIC_URL + '/dog.png'} />
                </div>
                <div className="slider">
                    <img className="icon" src={process.env.PUBLIC_URL + '/sea.png'} />
                    <Slider
                        axis="x"
                        xstep={1}
                        xmin={0}
                        xmax={10}
                        x={pool.x}
                        onChange={({ x }) => setPool({ x: parseFloat(x.toFixed(2)) })}
                        styles={{
                            track: {
                                backgroundColor: 'rgb(121, 110, 223)'
                            },
                            active: {
                                backgroundColor: 'rgb(211, 173, 155)'
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                opacity: 0.8
                            }
                        }}
                    />
                    <img className="icon" src={process.env.PUBLIC_URL + '/pool.png'} />
                </div>
                <div className="slider">
                    <img className="icon" src={process.env.PUBLIC_URL + '/food.png'} />
                    <Slider
                        axis="x"
                        xstep={1}
                        xmin={0}
                        xmax={10}
                        x={gina.x}
                        onChange={({ x }) => setGina({ x: parseFloat(x.toFixed(2)) })}
                        styles={{
                            track: {
                                backgroundColor: 'rgb(121, 110, 223)'
                            },
                            active: {
                                backgroundColor: 'rgb(211, 173, 155)'
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                opacity: 0.8
                            }
                        }}
                    />
                    <img className="gina" src={process.env.PUBLIC_URL + '/gina.png'} />
                </div>
            </div>

            <Button variant="primary" className="saveButton" size="lg" onClick={submit}>submit</Button>


        </div>
    )
}
export default BuildProfile
