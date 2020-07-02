// import React, {useState, useEffect} from 'react';
// import {API} from "../backend"
// import Base from "./Base"
// import Card from './Card';
// import { loadCart } from './helper/CartHelper';

// const Cart = () => {
//    const [products, SetProducts] = useState([]);
//    const [reload, SetReload] = useState(false);

//     useEffect(() => {
//         SetProducts(loadCart())
//     }, [reload]);

//    const loadAllProducts = () => {
//        return(
//            <div>
//               {products.map((product,index) => {
//                    return(
//                        <div key={index} className="mb-4">
//                             <Card product={product} AddtoCart={false} removeFromCart={true} SetRseload={SetReload} reload={reload} / >
//                        </div>
//                    )
//                })}
//            </div>
//        )
//    }

//    const loadCheckout = () => {
//     return(
//         <div>
//             <h2>This section for Checkout</h2>
//         </div>
//     )
// }

//     return (
//     <Base title="Cart" description="Ready to checkout!">
//         <div className="row">
//           <div className="col-6">{loadAllProducts()}</div>
//           <div className="col-6">{loadCheckout()}</div>
//         </div>
//     </Base>
//     );
// }

// export default Cart;

import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

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
        <h2>This section for checkout</h2>
      </div>
    );
  };

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
};

export default Cart;
