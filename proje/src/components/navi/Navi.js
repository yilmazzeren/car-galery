import React, { Component } from "react";
import bitmap from "../../images/bitmap.jpg"; 
import {Link} from "react-router-dom"
import "./style.css";


export default class Navi extends Component {
  render() {
    return (
      <div className="containerr">
        <div className="page-navbar">
          <img className="seat-logo" src={bitmap} alt=" " />

          <ul className="navbar-items">
            <li >
            <Link  className="navbar-item" to={this.props.pages[this.props.counter]} onClick={() => this.props.setCounter(0)}>MODELS</Link>
            </li>
            <li  >
            <Link className="navbar-item" to={this.props.pages[this.props.counter]} onClick={() => this.props.setCounter(1)}>COLORS</Link>
            </li>
            <li  >
            
            <Link  className="navbar-item" to={this.props.pages[this.props.counter]} onClick={() => this.props.setCounter(2)}>ACCESSORIES</Link>
            </li>
            <li >
            <Link className="navbar-item" to={this.props.pages[this.props.counter]} onClick={() => this.props.setCounter(3)}>SUMMARY</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
