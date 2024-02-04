import React, { Component } from "react";
import "./CartProduct.css";
class CartProduct extends Component {
  render() {
    return (
      <div className="card-product">
        <div className="card-product__wrapper">
          <div className="card-product__titles">
            <span className="card-product__titles-items">ITEMS</span>
            <span className="card-product__titles-prices">PRICES</span>
            <span className="card-product__titles-doings">DOING</span>
          </div>

          <div className="card-product__box">
            <div className="card-product__box-info">
              <img
                src="./images/product-1.png"
                alt="product"
                className="card-product__box-info-img"
              />
              <span className="card-product__box-info-name">
                Nike Air Max 270
              </span>
            </div>

            <div className="card-product__box-price">
              <span className="card-product__box-price-value">$1000</span>
            </div>

            <div className="card-product__box-btn">
              <button className="card-product__box-btn-tag">REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
