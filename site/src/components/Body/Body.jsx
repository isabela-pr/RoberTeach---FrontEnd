import React from "react";
import "./Body.css";
import RobertoConfuso from "../../assets/RobertinhoConfuso.png";

const Body = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="mt-5 box">
          <img src={RobertoConfuso} alt="" />
        </div>
        <div className="fala-roberto box">
          <p>Em qual campo você deseja entrar?</p>
        </div>
      </div>
    </>
  );
};

export default Body;
