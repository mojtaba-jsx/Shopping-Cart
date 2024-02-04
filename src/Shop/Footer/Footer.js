import React, { Component } from "react";
import "./Footer.css";

import { FaShoePrints } from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
          <FaShoePrints className="footer-shoe" />
        </div>
      </div>
    );
  }
}

export default Footer;
