import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>This is service:{name}</h2>
      <p>Price:{price}</p>
      <p>
        {" "}
        <small>Discription:{description}</small>
        <button className="btn btn-primary">name:{name}</button>
      </p>
    </div>
  );
};

export default Service;
