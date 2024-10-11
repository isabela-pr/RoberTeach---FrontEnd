import React from "react";
import "./Atividades.css";
import Header from "../Header/Header";
import separador from "../../assets/linha.svg";
import LP from "../../assets/LP.png";
import Mat from "../../assets/iconMat.svg"
import LI from "../../assets/iconEUA.svg"
import Hist from "../../assets/iconMapa.svg"
import Geo from "../../assets/iconLivroGeo.svg"
import Bio from "../../assets/iconDNA.svg"
import SetinhaVoltar from "../../assets/setinhaVoltar.svg"
import { Link } from "react-router-dom";

const Atividades = () => {
  return (
    <>
      <Header />
      <img src={separador} alt="" className="Separador" />

      <div className="Aprender d-flex justify-content-center mt-1">
        <p>Eu quero aprender...</p>
      </div>
      <div className="Atividades d-flex justify-content-center flex-column align-items-center">
        <div className="LP">
          <img src={LP} alt="" />
          <button className="customização-button">
            Língua Portuguesa
          </button>
        </div>
        <div className="LP">
          <img src={Mat} alt="" />
          <button className="customização-button">
            Matemática
          </button>
        </div>
        <div className="LP">
          <img src={LI} alt="" />
          <button className="customização-button">
            Língua Inglesa
          </button>
        </div>
        <div className="LP">
          <img src={Hist} alt="" />
          <button className="customização-button">
            História
          </button>
        </div>
        <div className="LP">
          <img src={Geo} alt="" />
          <button className="customização-button">
            Geografia
          </button>
        </div>
        <div className="LP">
          <img src={Bio} alt="" />
          <button className="customização-button">
            Biologia
          </button>
        </div>
      </div>

      <div className="EntrarBf d-flex justify-content-center ">
        <img src={SetinhaVoltar} alt="" className="setinha" />
        <Link className="btn btn-primary-A" to={"../AreasMat"}>
          <div className="Paragrafo">
            <p>Prosseguir</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Atividades;
