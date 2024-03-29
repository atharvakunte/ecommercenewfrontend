import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className=" bg-dark text-white text-center py-5">
          <h4 className="display-5">{title}</h4>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto ">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, feel free to contact!</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
      </footer>
    </div>
  );
};

export default Base;
