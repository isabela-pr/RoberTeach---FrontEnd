import React from "react";
import "./Atividades.css";
import Header from "../Header/Header";
import separador from "../../assets/linha.svg";
import LP from "../../assets/LP.png";
import Mat from "../../assets/iconMat.svg";
import LI from "../../assets/iconEUA.svg";
import Hist from "../../assets/iconMapa.svg";
import Geo from "../../assets/iconLivroGeo.svg";
import Bio from "../../assets/iconDNA.svg";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";
import { Link } from "react-router-dom";

const Atividades = () => {
  return (
    <>
      <Header />
      <div className="row w-100">
        <img src={separador} alt="" className="mb-4" />

        <div className="Aprender text-center">
          <p>Eu quero aprender...</p>
        </div>
        <div className="col-md-11 col-10 flex-column flex-md-row d-flex justify-content-center ps-5 ms-5 mt-md-5 mt-1">
          <div className=" col-md-5">
            <div className="d-flex justify-content-center flex-column gap-md-4 gap-2">
              <div className="col-10 d-flex align-items-center justify-content-between">
                <img src={LP} alt="" />
                <button className="customização-button">
                  Língua Portuguesa
                </button>
              </div>
              <div className="col-10 d-flex align-items-center justify-content-between ">
                <img src={Mat} alt="" />
                <button className="customização-button">Matemática</button>
              </div>
              <div className="col-10 d-flex align-items-center justify-content-between ">
                <img src={LI} alt="" />
                <button className="customização-button">Língua Inglesa</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column mt-md-0 mt-2 gap-md-4 gap-2">
            <div className="col-md-8 col-10 d-flex align-items-center justify-content-between">
              <img src={Hist} alt="" />
              <button className="customização-button">História</button>
            </div>
            <div className="col-md-8 col-10 d-flex align-items-center justify-content-between ">
              <img src={Geo} alt="" />
              <button className="customização-button">Geografia</button>
            </div>
            <div className="col-md-8 col-10 d-flex align-items-center justify-content-between ">
              <img src={Bio} alt="" />
              <button className="customização-button">Biologia</button>
            </div>
          </div>
        </div>
        <div className="EntrarBf d-flex justify-content-center mt-md-5 mt-4">
          <img src={SetinhaVoltar} alt="" className="setinha" />
          <Link className="btn btn-primary-A" to={"../AreasMat"}>
            <div className="Paragrafo">
              <p>Prosseguir</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Atividades;
