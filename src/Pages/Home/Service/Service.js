import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;

  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>This is service:{name}</h2>
      <p>Price:{price}</p>
      <p>
        {" "}
        <small>Discription:{description}</small>
        <button
          onClick={() => navigateToServiceDetail(_id)}
          className="btn btn-primary"
        >
          name:{name}
        </button>
      </p>
    </div>
  );
};

export default Service;
