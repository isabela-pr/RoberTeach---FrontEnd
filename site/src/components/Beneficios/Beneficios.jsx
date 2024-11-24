import React from "react";
import "./Beneficios.css";
import sequencia from "../../assets/linhaSequencia.svg";
import setinha from "../../assets/setaSequencia.svg";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";
import Abajur from "../../assets/abajur.svg";
import Dedo from "../../assets/iconDedo.svg";
import Separador from "../../assets/linha.svg";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";
import { Link } from "react-router-dom";

const Beneficios = () => {
  return (
    <>
      <div className="Sequencia d-flex justify-content-center mt-5">
        <img src={setinha} alt="" />
        <img src={sequencia} alt="" />
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-4 infoBene">
        <div className="falando box d-flex justify-content-center align-items-center">
          <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
        </div>
        <div className="fala-R box">
          <p className="text-center">
            O RoberTeach possui diversos benefícios...
          </p>
        </div>
      </div>
      <div className="Beneficios d-flex justify-content-center flex-column align-items-center mt-5">
        <div className="Benef mt-1">
          <div className="icons">
          <i className="bi bi-journal-bookmark Journal"></i>
          </div>
          <div className="FalaBene">
            <p>Abre novas possibilidades de estudos na sala de aula</p>
          </div>
        </div>
        <div className="Benef">
          <div className="icons">
          <i className="bi bi-lamp-fill Lamp"></i>
          </div>
          <div className="FalaBeneAbajur">
            <p>Gestão educacional mais eficiente</p>
          </div>
        </div>
        <div className="Benef">
          <div className="icons">
          <i className="bi bi-alarm-fill Clock"></i>
          </div>
          <div className="FalaBeneRelogio">
            <p className="ps-2 pe-2">
              Diminui a carga horária e a falta de tempo dos professores
            </p>
          </div>
        </div>
        <div className="Benef">
          <div className="icons">
          <i className="bi bi-hand-index-thumb Finger"></i>
          </div>
          <div className="FalaBeneDedo">
            <p>Aprendizagem mais interativa e dinâmica</p>
          </div>
        </div>
        <div className="Benef">
          <div className="icons">
          <i className="bi bi-coin Money"></i>
          </div>
          <div className="FalaBeneDinheiro">
            <p>Redução de custos com tarefas manuais</p>
          </div>
        </div>
      </div>
      <img src={Separador} alt="" className="separador" />
      <div className="EntrarAt d-flex justify-content-center mt-4">
        <img src={SetinhaVoltar} alt="" className="setinha" />
        <Link className="btn btn-primary-A" to={"../Atividades"}>
          <div className="Paragrafo">
            <p>Prosseguir</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Beneficios;
