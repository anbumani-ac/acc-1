import React, { Component } from "react";
import "./af.css";

let available = [];

export default class af extends Component {
  constructor(props) {
    super(props);
    this.submitaf = this.submitaf.bind(this);
    this.state = {
      input1: "",
      input2: "",
      available: []
    };
    // this.input1 = this.input1.bind(this);
    // this.input2 = this.input2.bind(this);
  }

  submitaf(e) {
    e.preventDefault();

    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    var getDates = function(input1, input2) {
      var dates = [],
        currentDate = input1,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
      while (currentDate <= input2) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
      return dates;
    };
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join("-");
    }

    // Usage
    var dates = getDates(new Date(input1), new Date(input2));
    dates.forEach(function(date) {
      available.push(formatDate(date));
      console.log(available);
    });

    this.setState({
      available: available
    });
  }
  render() {
    return (
      <>
        <form className="ca-form">
          <p>From</p>
          <input type="date" id="input1" onChange={this.input1}></input>
          <p>To</p>
          <input type="date" id="input2" onChange={this.input2}></input>
          <button
            type="submit"
            onClick={this.submitaf}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        {this.state.available.map((item, index) => {
          console.log("boom");
          return <p key={index}>{item}</p>;
        })}
      </>
    );
  }
}
