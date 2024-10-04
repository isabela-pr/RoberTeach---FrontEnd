import React from "react";
import "./Beneficios.css";
import sequencia from "../../assets/linhaSequencia.svg";
import setinha from "../../assets/setaSequencia.svg";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";
import Jornal from "../../assets/iconJornal.svg";
import Abajur from "../../assets/abajur.svg";
import Relogio from "../../assets/Relogio.svg";
import Dedo from "../../assets/iconDedo.svg";
import Dinheiro from "../../assets/iconDinheiro.svg";
import Separador from "../../assets/linha.svg";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";
import { Link } from "react-router-dom";

const Beneficios = () => {
  return (
    <>
      <div className="Sequencia">
        <img src={setinha} alt="" />
        <img src={sequencia} alt="" />
      </div>
      <div className="container-B">
        <div className="falando box d-flex justify-content-center align-items-center">
          <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
        </div>
        <div className="fala-R box">
          <p>O RoberTeach possui diversos benefícios...</p>
        </div>
      </div>
      <div className="Beneficios">
        <div className="Benef">
          <div className="image">
            <img src={Jornal} alt="" />
          </div>
          <div className="FalaBene">
            <p>Abre novas possibilidades de estudos na sala de aula</p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Abajur} alt="" />
          </div>
          <div className="FalaBeneAbajur">
            <p>Gestão educacional mais eficiente</p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Relogio} alt="" />
          </div>
          <div className="FalaBeneRelogio">
            <p>
              Diminui a carga horária e a falta de tempo dos professores para
              marcar a presença dos alunos em sala de aula
            </p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Dedo} alt="" />
          </div>
          <div className="FalaBeneDedo">
            <p>Aprendizagem mais interativa e dinâmica</p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Dinheiro} alt="" />
          </div>
          <div className="FalaBeneDinheiro">
            <p>Redução de custos com tarefas manuais</p>
          </div>
        </div>
      </div>
      <img src={Separador} alt="" className="separador" />
      <div className="EntrarAt">
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