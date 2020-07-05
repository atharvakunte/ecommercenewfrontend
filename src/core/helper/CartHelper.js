import React, { useState, useEffect } from "react";

export const addItemToCart = (item, next) => {
  let cart = [];
  let cartprice = 0;
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if (localStorage.getItem("cartprice")) {
      cartprice = JSON.parse(localStorage.getItem("cartprice"));
    }
    cart.push({
      ...item,
      count: 1,
    });
    cartprice = cartprice + item.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartprice", JSON.stringify(cartprice));
    next();
  }
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const loadCartprice = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cartprice")) {
      return JSON.parse(localStorage.getItem("cartprice"));
    }
  }
};

export const removeItemFromCart = (productId) => {
  let cart = [];
  let cartprice = 0;
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if (localStorage.getItem("cartprice")) {
      cartprice = JSON.parse(localStorage.getItem("cartprice"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
        cartprice = cartprice - product.price;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartprice", JSON.stringify(cartprice));
  }
  return cart;
};

export const emptyCart = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    next();
  }
};
