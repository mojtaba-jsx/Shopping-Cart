import React, { Component } from "react";
import "./Product.css";


class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__wrapper">
          <img
            src={this.props.img}
            alt="product"
            className="product-box-image"
          />
          <div className="product__info">
            <span className="product__info-name">{this.props.title}</span>
            <div className="product__info-starts">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5921 5.927L10.3407 9.44897L11.5914 15.173L7.4605 11.715L3.06347 14.989L4.76226 9.32898L0.796143 5.62903L5.97664 5.58899L7.92326 0.0280762L9.42649 5.66406L14.5921 5.927Z"
                  fill="#FFC600"
                />
              </svg>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5921 5.927L10.3407 9.44897L11.5914 15.173L7.4605 11.715L3.06347 14.989L4.76226 9.32898L0.796143 5.62903L5.97664 5.58899L7.92326 0.0280762L9.42649 5.66406L14.5921 5.927Z"
                  fill="#FFC600"
                />
              </svg>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5921 5.927L10.3407 9.44897L11.5914 15.173L7.4605 11.715L3.06347 14.989L4.76226 9.32898L0.796143 5.62903L5.97664 5.58899L7.92326 0.0280762L9.42649 5.66406L14.5921 5.927Z"
                  fill="#FFC600"
                />
              </svg>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5921 5.927L10.3407 9.44897L11.5914 15.173L7.4605 11.715L3.06347 14.989L4.76226 9.32898L0.796143 5.62903L5.97664 5.58899L7.92326 0.0280762L9.42649 5.66406L14.5921 5.927Z"
                  fill="#FFC600"
                />
              </svg>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0433 5.927L9.79181 9.44897L11.0425 15.173L6.9116 11.715L2.51457 14.989L4.21337 9.32898L0.247314 5.62903L5.42774 5.58899L7.37444 0.0280762L8.87759 5.66406L14.0433 5.927Z"
                  fill="#C1C8CE"
                />
              </svg>
            </div>

            <div className="product__info-price">
              <span className="product__info-price-dis">
                ${this.props.disPrice}
              </span>
              <span className="product__info-price-org">
                ${this.props.price}
              </span>
              <span className="product__info-price-percent">
                {this.props.discountPercent}% Off
              </span>
            </div>

            <button className="add-btn">
              Add To Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
