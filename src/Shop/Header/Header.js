import React, { Component } from "react";
import './Header.css'

import { GiRunningShoe } from "react-icons/gi";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="./images/header.png" alt="logo" className="header-image" />
        <div className="header-texts">
          <h1 className="header-title">Super Flash Sale <br /> 50% Off</h1>
          <button className="header-btn">
            Buy Shoes
            <GiRunningShoe  className="shoe-icon"/>
            </button>
        </div>
      </div>
    );
  }
}

export default Header;
