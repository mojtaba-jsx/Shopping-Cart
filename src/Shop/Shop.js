import React, { Component } from "react";
import "./Shop.css";

import Header from "./Header/Header";
import Product from "./Product/Product";
import CartProduct from "./CartProduct/CartProduct";
class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Nike Air Max 270",
          img: "./images/product-1.png",
          price: "300",
          disPrice: "250",
          discountPercent: "20",
        },
        {
          id: 2,
          title: "Nike Air Max 200",
          img: "./images/product-2.png",
          price: "400",
          disPrice: "200",
          discountPercent: "50",
        },
        {
          id: 3,
          title: "Nike Air Max 100",
          img: "./images/product-3.png",
          price: "500",
          disPrice: "350",
          discountPercent: "35",
        },
        {
          id: 4,
          title: "Nike Air Max 500",
          img: "./images/product-4.png",
          price: "200",
          disPrice: "180",
          discountPercent: "10",
        },
        {
          id: 5,
          title: "Nike Air Max 600",
          img: "./images/product-5.png",
          price: "800",
          disPrice: "550",
          discountPercent: "30",
        },
        {
          id: 6,
          title: "Nike Air Max 1000",
          img: "./images/product-6.png",
          price: "900",
          disPrice: "840",
          discountPercent: "20",
        },
        {
          id: 7,
          title: "Nike Air Max 1000",
          img: "./images/product-7.png",
          price: "900",
          disPrice: "840",
          discountPercent: "20",
        },
        {
          id: 8,
          title: "Nike Air Max 1000",
          img: "./images/product-8.png",
          price: "900",
          disPrice: "840",
          discountPercent: "20",
        },
      ],
      shoppingCart: [],
      socials: [
        { id: 1, href: "http://www.youtube.com", image: "logo.png" },
        { id: 2, href: "http://www.youtube.com", image: "logo.png" },
        { id: 3, href: "http://www.youtube.com", image: "logo.png" },
      ],
    };
  }
  render() {
    return (
      <div className="shop" id="shop">
        <Header />

        <section className="products">
          <h1 className="products-title">Shoes List</h1>
          <div className="products__wrapper">
            {this.state.products.map((product) => (
              <Product {...product} key={product.id} />
            ))}
          </div>
        </section>

        <section className="cart">
          <div className="cart__Wrapper">
            <CartProduct />
          </div>
        </section>
      </div>
    );
  }
}

export default Shop;
