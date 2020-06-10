import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/button'
import './Login.css'
import Slider from 'react-input-slider';
import * as Scroll from 'react-scroll';


function BuildProfile(props) {
    const [phaseOne, setPhaseOne] = useState(false)
    const [phaseTwo, setPhaseTwo] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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

    const scrollOne = () => {
        setPhaseOne(true)
        Scroll.animateScroll.scrollToBottom();
    }

    const scrollTwo = () => {
        setPhaseTwo(true)
        Scroll.animateScroll.scrollToBottom();

    }


    return (
        <div className="formContainer">
            <h2 className="profileTitle"> Personal details</h2>
            <div className="doubleInput">
                <input
                    type="text"
                    name="firstName"
                    className="inputBox"
                    placeholder="Please enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    name="lastName"
                    className="inputBox"
                    placeholder="Please enter your first name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="doubleInput">
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
            </div>
            <div className="doubleInput">
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
            </div>
            <Button className="nextButton" onClick={scrollOne}>Next</Button>
            {phaseOne &&
                <>
                    <h2 className="profileTitle"> Choose your preferred activities </h2>
                    <div className="boxes">
                        <div>
                            {yoga === "0" ?
                                <button className="box" onClick={() => setYoga("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_960_720.jpg" />
                                    yoga
                                </button> :
                                <button className="lightBox" onClick={() => setYoga("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    yoga
                                </button>
                            }
                            {meditation === "0" ?
                                <button className="box" onClick={() => setMeditation("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg" />
                                    Meditation
                                </button> :

                                <button className="lightBox" onClick={() => setMeditation("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Meditation</button>
                            }
                            {TRX === "0" ?
                                <button className="box" onClick={() => setTRX("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2018/04/05/17/19/trx-3293471_960_720.jpg" />
                                    TRX</button> :
                                <button className="lightBox" onClick={() => setTRX("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    TRX</button>
                            }
                            {cityTour === "0" ?
                                <button className="box" onClick={() => setCityTour("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2020/01/03/21/41/italy-4739184_960_720.jpg" />
                                    City Tour</button> :
                                <button className="lightBox" onClick={() => setCityTour("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    City Tour</button>
                            }
                        </div>
                        <div>

                            {hiking === "0" ?
                                <button className="box" onClick={() => setHiking("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg" />
                                    Hiking</button> :
                                <button className="lightBox" onClick={() => setHiking("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Hiking</button>
                            }
                            {pubCrawl === "0" ?
                                <button className="box" onClick={() => setPubCrawl("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_960_720.jpg" />
                                    Pub Crawl</button> :
                                <button className="lightBox" onClick={() => setPubCrawl("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Pub Crawl</button>
                            }
                            {lecture === "0" ?
                                <button className="box" onClick={() => setLecture("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2020/04/20/20/57/training-5069846_960_720.jpg" />
                                    Lecture</button> :
                                <button className="lightBox" onClick={() => setLecture("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Lecture</button>
                            }
                            {woodwork === "0" ?
                                <button className="box" onClick={() => setWoodwork("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2017/06/09/04/02/wood-working-2385634_960_720.jpg" />
                                    Wood Work</button> :
                                <button className="lightBox" onClick={() => setWoodwork("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Wood Work</button>
                            }
                        </div>
                        <div>

                            {standUp === "0" ?
                                <button className="box" onClick={() => setStandUp("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2017/03/08/03/27/comedian-2125853_960_720.jpg" />
                                    Stand-Up</button> :
                                <button className="lightBox" onClick={() => setStandUp("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Stand-Up</button>
                            }
                            {dinner === "0" ?
                                <button className="box" onClick={() => setDinner("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg" />
                                    Dinner</button> :
                                <button className="lightBox" onClick={() => setDinner("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Dinner</button>
                            }
                            {boardGame === "0" ?
                                <button className="box" onClick={() => setBoardGame("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2018/11/20/13/36/composing-3827454_960_720.jpg" />
                                    Board Game</button> :
                                <button className="lightBox" onClick={() => setBoardGame("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Board Game</button>
                            }
                            {escapeRoom === "0" ?
                                <button className="box" onClick={() => setEscapeRoom("1")}>
                                    <img className="img" src="https://cdn.pixabay.com/photo/2016/11/20/16/42/escape-1843240_960_720.jpg" />
                                    Escape Room</button> :
                                <button className="lightBox" onClick={() => setEscapeRoom("0")}>
                                    <img className="img" src="https://pbs.twimg.com/profile_images/702914691794931712/AbHdURQV_400x400.png" />
                                    Escape Room</button>
                            }

                        </div>
                    </div>
                    <Button className="nextButton" onClick={scrollTwo}>Next</Button>
                </>
            }
            {phaseTwo &&
                <>
                    <h2 className="profileTitle"> What do you like more? </h2>
                    <div className="slideCon">
                        <div>Beer or Wine</div>
                        <div className="slider">
                            <img className="icon" src="https://cdn.pixabay.com/photo/2017/05/05/19/33/beer-2288121_960_720.jpg" />
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
                        <div>Cat or Dog</div>
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
                        <div>beach or pool</div>
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
                        <div>Food from home or Gina</div>
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
                    <Button className="submitButton" onClick={submit}>Submit</Button>
                </>
            }


        </div>
    )
}
export default BuildProfile
