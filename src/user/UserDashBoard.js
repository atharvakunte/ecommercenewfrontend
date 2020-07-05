import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const UserDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const userLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">User Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/profile" className="nav-link text-success">
              My Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/orders" className="nav-link text-success">
              My Orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/favourites" className="nav-link text-success">
              Favourites
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header bg-dark text-white">User Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="bagde badge-pill badge-dark mr-2">Name</span>{" "}
            {name}
          </li>
          <li className="list-group-item">
            <span className="bagde badge-pill badge-dark mr-2">email</span>{" "}
            {email}
          </li>
          <li className="list-group-item">
            <span className="bagde badge-pill badge-danger mr-2">
              User Area
            </span>
          </li>
        </ul>
      </div>
    );
  };

  if (isMobile) {
    return (
      <Base
        title="Welcome to User Dashboard"
        description="See your orders and addresses here"
        className="container bg-success p-4"
      >
        <div className="row">
          <div className="col-12 mb-3">{userRightSide()}</div>
          <div className="col-12 mb-3">{userLeftSide()}</div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base
        title="Welcome to User Dashboard"
        description="See your orders and addresses here"
        className="container bg-success p-4"
      >
        <div className="row">
          <div className="col-3 mb-3">{userLeftSide()}</div>
          <div className="col-9 mb-3">{userRightSide()}</div>
        </div>
      </Base>
    );
  }
};

export default UserDashBoard;
