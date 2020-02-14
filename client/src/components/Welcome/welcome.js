import React, { Component } from "react";
import "./welcome.css";

export default class welcome extends Component {
  render() {
    return (
      <>
        <div className="welcome" id="welcome">
          <h1>Welcome to Adithya Convention Center</h1>
          <h3>For Auspicious Beginnings</h3>
          <p>
            We are a brand new Convention Center in Coimbatore. We are located
            at Saravanampatti. It’s one among the top AC marriage halls. It is
            an ideal location for all marriages, receptions, and corporate
            events.
          </p>
          <img src={require("./marriage.png")}></img>
        </div>
        <div className="welcome">
          <h1>Salient Features</h1>
          <p>
            The aesthetic design, modern amenities and prime location makes us
            an ideal choice for marriages, various festivities and celebrations.
            Features such as ample parking space, modern kitchen facilities, A/C
            Hall, A/C rooms for bride and groom, spacious dining hall, fully
            covered buffet space sets it apart.
          </p>
        </div>
      </>
    );
  }
}
