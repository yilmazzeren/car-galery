import React, { Component } from "react";

import "./style.css";
export default class Car1 extends Component {
  

  firstCar=(i) => {
    let carCircleWrapper = document.getElementsByClassName("car-circle-wrapper")[0]
    carCircleWrapper.style.border = "0.1rem solid gray";
    let carImage = document.getElementsByClassName("car-image")[0]
    carImage.style.opacity="1"
    let carModel = document.getElementsByClassName("car-circle__model-name")[0]
    carModel.style.color="#F2F2F2"
    let tik = document.getElementsByClassName("tik")[0]
    tik.style.display="flex"
    let selectButton = document.getElementsByClassName("select-button")[0]
    selectButton.style.display="inline-block"
    let p = document.getElementsByClassName("p")[0]
    p.style.display="inline-block"

    let carCircleWrapper2 = document.getElementsByClassName("car-circle-wrapper")[1]
    carCircleWrapper2.style.border = "none";
    let carImage2 = document.getElementsByClassName("car-image")[1]
    carImage2.style.opacity="0.3"
    let carModel2 = document.getElementsByClassName("car-circle__model-name")[1]
    carModel2.style.color="white"
    let tik2 = document.getElementsByClassName("tik")[1]
    tik2.style.display="none"
    let selectButton2 = document.getElementsByClassName("select-button")[1]
    selectButton2.style.display="none"
    let p2 = document.getElementsByClassName("p")[1]
    p2.style.display="none"

  }

  secondCar=(i) => {
    let carCircleWrapper = document.getElementsByClassName("car-circle-wrapper")[1]
    carCircleWrapper.style.border = "0.1rem solid gray";
    let carImage = document.getElementsByClassName("car-image")[1]
    carImage.style.opacity="1"
    let carModel = document.getElementsByClassName("car-circle__model-name")[1]
    carModel.style.color="#F2F2F2"
    let tik = document.getElementsByClassName("tik")[1]
    tik.style.display="flex"
    let selectButton = document.getElementsByClassName("select-button")[1]
    selectButton.style.display="inline-block"
    let p = document.getElementsByClassName("p")[1]
    p.style.display="inline-block"

    let carCircleWrapper2 = document.getElementsByClassName("car-circle-wrapper")[0]
    carCircleWrapper2.style.border = "none";
    let carImage2 = document.getElementsByClassName("car-image")[0]
    carImage2.style.opacity="0.3"
    let carModel2 = document.getElementsByClassName("car-circle__model-name")[0]
    carModel2.style.color="white"
    let tik2 = document.getElementsByClassName("tik")[0]
    tik2.style.display="none"
    let selectButton2 = document.getElementsByClassName("select-button")[0]
    selectButton2.style.display="none"
    let p2 = document.getElementsByClassName("p")[0]
    p2.style.display="none"

  }

 
  render() {
    return (
      <div className="car">
        {this.props.cars.map(item => (
          <div key={item.id} className="car-circle-wrapper">
            <div className="car-circle">
              <div className="car-circle-check">
                <i className="tik fas fa-check"></i>
              </div>
              <div className="model-image-button">
                <div className="label-image">
                
                  <label className="car-circle__model-name">{item.model}</label>
                  <img
                    className="car-image"
                    onClick={() => {
                      if(item.id===1) {
                        this.firstCar()
                      }else {
                        this.secondCar()
                      }
                    }}
                    src={item.imgName}
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
                      {item.carPrice}
                    </span>
                    'den Başlayan <br /> fiyatlarla
                  </p>
                </div>
                <div className="button">
                  <button
                    onClick={() => {
                      if(item.id) {
                          this.props.carPriceShow(item)
                      }
                    }}
                    className="select-button"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
