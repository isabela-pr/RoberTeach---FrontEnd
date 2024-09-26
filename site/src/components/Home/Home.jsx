import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import ensinoRemoto from "../../assets/EnsinoRemoto.png";
import EnsinoInstitucional from "../../assets/EnsinoInstitucional.png";
import Separador from "../../assets/linha.svg";

const Home = () => {
  return (
    <>
      <Body />
      <div className="row">
        <nav className="gap-4 box-e d-flex flex-column d-md-block col col-md justify-content-center rounded-3">
          <Link
            className="ensinoRemoto btn bg-light text-primary-emphasis border"
            to={"EnsinoRemoto"}
          >
            <img src={ensinoRemoto} alt="" />
            Ensino Remoto
          </Link>
          <Link
            className="ensinoInstitucional btn bg-light text-primary-emphasis border"
            to={"EnsinoInstitucional"}
          >
            <img src={EnsinoInstitucional} alt="" />
            Ensino Institucional
          </Link>
        </nav>

        <img src={Separador} alt="" className="separador" />
      </div>
    </>
  );
};

export default Home;
