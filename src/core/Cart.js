import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart, loadCartprice } from "./helper/CartHelper";
import { isMobile } from "react-device-detect";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [cartprice, setCartprice] = useState();

  useEffect(() => {
    setCartprice(loadCartprice());
  });

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h4>Cart total : ₹{cartprice}</h4>
      </div>
    );
  };

  if (isMobile) {
    return (
      <Base title="Cart Page" description="Ready to checkout">
        <div className="row text-center">
          <div className="col-12">{loadCheckout()}</div>
          <div className="col-12">
            {products.length > 0 ? (
              loadAllProducts(products)
            ) : (
              <h3>No products in Cart</h3>
            )}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title="Cart Page" description="Ready to checkout">
        <div className="row text-center">
          <div className="col-6">
            {products.length > 0 ? (
              loadAllProducts(products)
            ) : (
              <h3>No products in Cart</h3>
            )}
          </div>
          <div className="col-6">{loadCheckout()}</div>
        </div>
      </Base>
    );
  }
};

export default Cart;
