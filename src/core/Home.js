import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";
import { isMobile } from "react-device-detect";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getAllProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  if (isMobile) {
    return (
      <Base title="Home" description="Welcome to the store!">
        <div className="row text-center">
          <h1 className="text-white">All Products</h1>
          <div className="container">
            <div className="row">
              {products.map((product, index) => {
                return (
                  <div key={index}>
                    <Card product={product} className="col-12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title="Home" description="Welcome to the store!">
        <div className="row text-center">
          <h1 className="text-white">All Products</h1>
          <div className="container">
            <div className="row">
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-4 mb-4">
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Base>
    );
  }
};

export default Home;
