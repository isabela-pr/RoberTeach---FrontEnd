import React, { useEffect } from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("Home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="body">
        <div className="eye-container gap-5">
          <div className="eye">
            <div className="shine"></div>
          </div>
          <div className="eye">
            <div className="shine"></div>
          </div>
        </div>
        <div className="Empresa">
          <h1>RoberTeach</h1>
          <p>RoberTech</p>
        </div>
      </div>
    </>
  );
};

export default Intro;
