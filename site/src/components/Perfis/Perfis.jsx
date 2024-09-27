import React from "react";
import "./Perfis.css";
import Header from "../Header/Header";
import separador from "../../assets/linha.svg";
import Giovana from "../../assets/Giovana.png";
import Maria from "../../assets/Maria.png";
import Leticia from "../../assets/Leticia.png";
import Celine from "../../assets/Celine.png";
import Joaquina from "../../assets/Joaquina.png";
import Patricia from "../../assets/Patricia.png";
import { Link } from "react-router-dom";

const Perfis = () => {
  return (
    <>
      <Header />
      <div className="linha">
        <img src={separador} alt="" />
      </div>
      <h6>Selecione o seu perfil:</h6>
      <div className="Perfil">
        <div className="Perfis1">
          <div>
            <img src={Giovana} alt="" />
            <p>Giovanna</p>
          </div>
          <div>
            <img src={Maria} alt="" />
            <p>Maria</p>
          </div>
          <div>
            <img src={Leticia} alt="" />
            <p>Leticia</p>
          </div>
        </div>
        <div className="Perfis2">
          <div>
            <img src={Celine} alt="" />
            <p>Celine</p>
          </div>
          <div>
            <img src={Joaquina} alt="" />
            <p>Joaquina</p>
          </div>
          <div>
            <img src={Patricia} alt="" />
            <p>Patricia</p>
          </div>
        </div>
      </div>
      <div className="Sair">
        <Link className="Sair2 btn btn-primary" to={"../EntrarConta"}>
         <p>Sair</p> 
        </Link>
      </div>
    </>
  );
};

export default Perfis;
