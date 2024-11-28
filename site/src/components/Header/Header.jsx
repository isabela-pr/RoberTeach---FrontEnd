import React from "react";
import EnsinoRemoto from "../EnsinoRemoto/EnsinoRemoto";
import { Link } from "react-router-dom";
import RoberTeach from "../../assets/RoberTeach.png"

const Header = () => {
  return (
    <div className="m-2">
      <img src={RoberTeach} alt="" />
    </div>
  );
};

export default Header;
