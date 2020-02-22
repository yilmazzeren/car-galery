import React, { Component } from "react";
import "./style.scss";

export default class Accessories extends Component {


  render() {
    return (
      <div className="accessories">
        {console.log(this.props.myCar)}
        <div className="accessories-text">
          Seçtiğin araca ait özellikler,
          <br />
          konforun ve yaşam stilini belirler
        </div>
        <div className="accessories-wrapper">
          {this.props.myCar.accessories.map((aksesuar, key) => (
            <div
              key={key}
              id={aksesuar.id}
              className="accessories-items"
            >
              <div
                
                className="accessories-items-text"
              >
                
                {aksesuar.name}
              </div>
              <div  className="accessories-items-price">{aksesuar.price}</div>
              <div
                 id={aksesuar.id}
                
                className="accessories-items-price-button"
              >
                <i onClick={this.props.checkButton} id={aksesuar.iId} className=" fas fa-check"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
