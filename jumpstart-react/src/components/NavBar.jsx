import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const {id} = props;

  const handleLogOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="navbar-height">
      <ul className="nav custom-nav align-content-center d-flex">
        <li>
          <img width="50px" className="logo" src={process.env.PUBLIC_URL + "/logo.jpeg"} />
        </li>
        {!id && (
          <li className="nav-item">
            <Link className="nav-link nav-text" to="/">
              <h4>Log-In</h4>
            </Link>
          </li>
        )}
        {!id && (
          <li className="nav-item">
            <Link className="nav-link nav-text" to="/sign-up">
              <h4>Sign-Up</h4>
            </Link>
          </li>
        )}
        {id && (
          <li className="nav-item mr-5 pr-5">
            <Link className="nav-link nav-text" to="/categories">
              <h4>Look for event</h4>
            </Link>
          </li>
        )}

        {id && (
          <li className="nav-item mr-5 pr-5 info-margin">
            <Link
              onClick={() => {
                handleLogOut();
              }}
              className="nav-link nav-text"
              to="/categories"
            >
              <h4>Log-out</h4>
            </Link>
          </li>
        )}
        <li className="nav-item ">
          <span>
            {id && <h4 className="">{`welcome: ${localStorage.username}`}</h4>}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;