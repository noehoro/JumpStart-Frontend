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
      <div className="welcomeHeader"></div>
      <div className="loginContainer">
        <div>
          <h1 className="loginHeader pt-5">Login</h1>
          <input
            type="text"
            name="userName"
            className="loginBox-2 input-color rounded-pill"
            placeholder=" User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="loginBox-2 input-color rounded-pill"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-5 pt-5">
            <button
              className="bnt btn-primary mt-5 login-width rounded-pill"
              onClick={login}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
