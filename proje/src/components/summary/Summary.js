import React, { Component } from "react";
import "./style.css";
export default class Summary extends Component {
  render() {
    return (
      <div className="summary-wrapper">
        
        <div className="checked-car">
        <div key={this.props.myCar.id} className="car-circle-wrapper">
            <div className="car-circle">
              <div className="car-circle-check">
                <i className="tik fas fa-check"></i>
              </div>
              <div className="model-image-button">
                <div className="label-image">
                
                  <label style={{color:"#f2f2f2" , fontSize:"14rem" ,"marginTop":"-2rem"}} className="car-circle__model-name">{this.props.myCar.model}</label>
                  <img
                    className="car-image"
                    style={{opacity:"1"}}
                    src={this.props.myCar.imgName}
                    alt=""
                  ></img>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="car-info">
          
          <div className="car-info-name">
            MODEL
            <div className="property">{this.props.myCar.modelName}</div>
            <br/>
            <hr/>
          </div>
          <div className="car-info-name">
            COLOR
            <div className="property">{this.props.selectedColor}</div>
            <br/>
            <hr/>
          </div>
          <div className="car-info-name">
            ACCESSORIES
            <div className="property">{this.props.accessories}</div>
            <br/>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}
