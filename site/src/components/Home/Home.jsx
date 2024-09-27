import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import ensinoRemoto from "../../assets/EnsinoRemoto.png";
import EnsinoInstitucional from "../../assets/EnsinoInstitucional.png";
import Separador from "../../assets/linha.svg";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";

const Home = () => {
  return (
    <>
      <Header />
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
        <div className="rodape d-flex justify-content-center align-items-center pt-4">
          <img src={SetinhaVoltar} alt="" className="setinha" />
          <button>prosseguir</button>
        </div>
      </div>
    </>
  );
};

export default Home;
