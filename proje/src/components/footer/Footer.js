import React, { Component } from "react";
import "./style.css";
import bitmapCar3 from "../../images/bitmapCar3.png";
import { Link } from "react-router-dom";

export default class Footer extends Component {
 
  render() {
    return (
      <div className="page-footer">
        <div className="left-side">
          <div className="left-side__image">
            <div>
              <img src={bitmapCar3} alt=" " />
            </div>
          </div>
          <div className="left-side__price-section">
            <label className="total-label" style={{ float: "left" }}>
              TOTAL
            </label>
            <br />
            <label className="total-label">{this.props.price + " TL"} </label>
          </div>
        </div>
        <div className="right-side">
          {console.log(this.props.counter)}
        {this.props.label[this.props.counter-1]}
          <Link
            style={{ fontSize: "1.5rem", color: "white",textDecoration:"none" }}
            className="fas fa-arrow-right"
            onClick={this.props.footerFunction} 
            to={this.props.pages[this.props.counter]}
          >
          </Link>
          
        </div>
      </div>
    );
  }
}
