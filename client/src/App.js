import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbatron from "./components/Jumbatron/jumbatron";
import Welcome from "./components/Welcome/welcome";
import Footer from "./components/Footer/footer";
import Events from "./components/Events/events";
import Notifications from "./components/Notifications/notifications";
import Booking from "./components/Booking/booking";
import Gallery from "./components/Gallery/gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Jumbatron />
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
