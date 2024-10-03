import React from "react";
import "./Beneficios.css";
import sequencia from "../../assets/linhaSequencia.svg";
import setinha from "../../assets/setaSequencia.svg";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";
import Jornal from "../../assets/iconJornal.svg";
import Abajur from "../../assets/abajur.svg";
import Relogio from "../../assets/Relogio.svg"

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
          <p>Olá, eu sou o Roberto Robô, venha conhecer o meu site!</p>
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
          <div className="FalaBeneAbajur">
            <p>
              Diminui a carga horária e a falta de tempo dos professores para
              marcar a presença dos alunos em sala de aula
            </p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Abajur} alt="" />
          </div>
          <div className="FalaBeneAbajur">
            <p>Aprendizagem mais interativa e dinâmica</p>
          </div>
        </div>
        <div className="Benef">
          <div className="image">
            <img src={Abajur} alt="" />
          </div>
          <div className="FalaBeneAbajur">
            <p>Redução de custos com tarefas manuais</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficios;
