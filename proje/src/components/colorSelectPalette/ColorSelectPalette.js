import React, { Component } from "react";
// import Car1 from "../car1/Car1";
import "./colorpalette.css";
export default class ColorSelectPalette extends Component {

  
  

  render() {
    return (
      <div className="colorSelectPalette">
        <div className="colors-text">
          Hayalindeki araca dair rengini <br />
          seç,tarzını yansıt
        </div>
        <div className="colors-car">
        <div key={this.props.myCar.id} className="car-circle-wrapper">
            <div className="car-circle">
              <div className="car-circle-check">
                <i className="tik fas fa-check"></i>
              </div>
              <div className="model-image-button">
                <div className="label-image">
                
                  <label style={{color:"#f2f2f2" , fontSize:"14rem"}} className="car-circle__model-name">{this.props.myCar.model}</label>
                  <img
                    className="car-image"
                    style={{opacity:"1"}}
                    src={this.props.myCar.imgName}
                    alt=""
                  ></img>
                </div>
                
                <div className="p">
                  <p style={{ fontSize: "1.6rem" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.6rem"
                      }}
                    >
                      {this.props.myCar.carPrice}
                    </span>
                    'den Başlayan <br /> fiyatlarla
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="color-palette">
            <div id="red" onClick={this.props.checkColor} className="color-circle"></div>
            <div id="black" onClick={this.props.checkColor} className="color-circle"></div>
            <div id="gray" onClick={this.props.checkColor} className="color-circle"></div>
          </div>
        </div>
      </div>
    );
  }
}
