import React from "react";
import "./Body.css";
import RobertoConfuso from "../../assets/RobertinhoConfuso.png";

const Body = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="mt-3 box p-2 w-50">
          <img src={RobertoConfuso} alt="" />
        </div>
        <div className="fala-roberto box">
          <p className="text-center">
            Entre no campo abaixo e faça as questões de matemática!
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
