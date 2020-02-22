import React, { Component } from "react";
import Navi from "../navi/Navi";
import Footer from "../footer/Footer";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import ColorSelectPalette from "../colorSelectPalette/ColorSelectPalette";
import Accessories from "../accessories/Accessories";
import Summary from "../summary/Summary";
import Car1 from "../car1/Car1";



class App extends Component {
  state = {
    price: "",
    cars: [],
    myCar: {
      id:null,
      model:"",
      modelName:"",
      carPrice:"",
      selectedCar:null,
      accessories:[],
      imgName:""
    },
    selectedColor:[],
    accessories:"",
    label : ["COLORS","ACCESSORIES","SUMMARY","BUY NOW"],
    pages : ["/","COLORS","ACCESSORIES","SUMMARY"],
    counter:1
  };
  carPriceShow = item => {
    this.setState({ price: item.carPrice });

    if (item.id) {
      item.selectedCar = true;
      if (item.selectedCar === true) {
        this.setState({ myCar: item });
      }
    }
  };
  componentDidMount() {
    this.getCarsInfo();
  }

  getCarsInfo = () => {
    fetch("./cars.json")
      .then(response => response.json())
      .then(data => this.setState({ cars: data }))
      .catch(err => console.log(err));
  };

  checkColor = (e) => {
   if(e.target.id==="red") {
     this.setState({selectedColor:"ROSE RED"})
   } else if (e.target.id==="black") {
     this.setState({selectedColor:"BLACK"})
   } else if (e.target.id==="gray") {
     this.setState({selectedColor:"LİGHT GRAY"})
   }

  };

  checkButton = e => {
   
    if(e.target.id==="i1") {
      
    //  console.log(e.target.parentElement.previousSibling.textContent)
      e.target.parentElement.parentElement.classList.toggle("accessories-items")
      e.target.parentElement.parentElement.classList.toggle("accessories-items-check")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price-check")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text-check")
      if(e.target.parentElement.parentElement.className==="accessories-items") {
        this.setState({price:this.state.price -parseInt(e.target.parentElement.previousSibling.textContent)})
      } else {
        this.setState({price:this.state.price +parseInt(e.target.parentElement.previousSibling.textContent)})
      }
      // console.log(e.target.parentElement.previousSibling.previousSibling)
      this.setState({accessories: this.state.accessories.concat("  "+e.target.parentElement.previousSibling.previousSibling.textContent)})

    }
      if (e.target.id==="i2") {
      e.target.parentElement.parentElement.classList.toggle("accessories-items")
      e.target.parentElement.parentElement.classList.toggle("accessories-items-check")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price-check")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text-check")
      if(e.target.parentElement.parentElement.className==="accessories-items") {
        this.setState({price:this.state.price -parseInt(e.target.parentElement.previousSibling.textContent)})
      } else {
        this.setState({price:this.state.price +parseInt(e.target.parentElement.previousSibling.textContent)})
      }
      this.setState({accessories: this.state.accessories.concat("  "+e.target.parentElement.previousSibling.previousSibling.textContent)})
    } 
    if(e.target.id==="i3") {
      e.target.parentElement.parentElement.classList.toggle("accessories-items")
      e.target.parentElement.parentElement.classList.toggle("accessories-items-check")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price")
      e.target.parentElement.previousSibling.classList.toggle("accessories-items-price-check")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text")
      e.target.parentElement.previousSibling.previousSibling.classList.toggle("accessories-items-text-check")
      if(e.target.parentElement.parentElement.className==="accessories-items") {
        this.setState({price:this.state.price -parseInt(e.target.parentElement.previousSibling.textContent)})
      } else {
        this.setState({price:this.state.price +parseInt(e.target.parentElement.previousSibling.textContent)})
      }
      this.setState({accessories: this.state.accessories.concat("  "+e.target.parentElement.previousSibling.previousSibling.textContent)})
      
    }
  };

 
  footerFunction = () => {
   
        this.setState({counter:this.state.counter+1})

  }
  
  setCounter = (payload) => {
     
      this.setState({counter:payload})
  }

  render() {
    return (
      <div className="App">
        
        <Navi pages={this.state.pages} setCounter = {this.setCounter} counter={this.state.counter} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Car1
                {...props}
                cars={this.state.cars}
                carPriceShow={this.carPriceShow}
              />
            )}
          ></Route>
          <Route
            path="/colors"
            render={props => (
              <ColorSelectPalette
                {...props}
                myCar={this.state.myCar}
                carPriceShow={this.carPriceShow}
                checkColor={this.checkColor}
              />
            )}
          ></Route>
          <Route
            path="/accessories"
            render={props => (
              <Accessories {...props} checkButton={this.checkButton} myCar={this.state.myCar} />
            )}
          ></Route>
          <Route
            path="/summary"
            render={props => (
              <Summary
                {...props}
                myCar={this.state.myCar}
                cars={this.state.cars}
                carPriceShow={this.carPriceShow}
                selectedColor={this.state.selectedColor}
                accessories={this.state.accessories}
              />
            )}
          ></Route>
          {/* <Route path="/buynow" component={BuyNow}></Route> */}
        </Switch>

        <Footer label={this.state.label} footerFunction={this.footerFunction} counter={this.state.counter} pages={this.state.pages}  price={this.state.price} />
        
      </div>
    );
  }
}

export default App;
