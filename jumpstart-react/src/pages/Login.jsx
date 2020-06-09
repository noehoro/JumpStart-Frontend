import React, {useState, useEffect} from "react";
import "./Login.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const login = () => {
    const postData = {username: userName, password: password};
    axios
      .post("https://jumpstarthack.herokuapp.com/api/login", postData)
      .then((res) => {
        if (res.data.data) {
          setId(res.data.data.id);
          console.log(res.data.data.username);
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("username", res.data.data.username);
        } else {
          setId(false);
        }
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="welcomeHeader">
        <img className="logo" src={process.env.PUBLIC_URL + "/logo.jpeg"} />
      </div>
      <div className="loginContainer">
        <div>
          <h1 className="loginHeader">Login</h1>
          <input
            type="text"
            name="userName"
            className="loginBox input-color rounded-pill"
            placeholder=" User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="loginBox input-color rounded-pill"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              className="bnt btn-primary mt-5 login-width rounded-pill"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
