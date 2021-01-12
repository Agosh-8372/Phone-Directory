import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class App extends Component {
  render() {
    let subscribers = [
      {
        id:1,
        name:"Naveen",
        phone:"1234567899"
      },
      {
        id:2,
        name:"Agosh",
        phone:"7827894449"
      },
    ]
    return(
      <div>
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(item =>{
              return <div key={item.id} className="grid-container">
              <span className="grid-item">{item.name}</span>
              <span className="grid-item">{item.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
