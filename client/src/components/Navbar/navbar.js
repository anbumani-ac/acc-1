import React, { Component } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-light header">
          <a className="navbar-brand" href="#">
            <img className="logo" src={require("../../img/logo.png")} />
          </a>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#welcome" className="nav-link">
                About us
              </a>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notifications" className="nav-link">
                Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
