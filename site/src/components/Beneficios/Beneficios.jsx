import React from "react";
import "./Beneficios.css";
import sequencia from "../../assets/linhaSequencia.svg";
import setinha from "../../assets/setaSequencia.svg";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";
import { Link } from "react-router-dom";

const Beneficios = () => {
  return (
    <>
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-md-13">
          <div className="d-flex justify-content-center mt-3 gap-4">
            <img src={setinha} alt="" className="seta" />
            <img src={sequencia} alt="" className="w-50" />
          </div>
        </div>
        <div className="col-md-6 pe-5 container d-flex  align-items-center mt-4">
          <div className="w-100  box d-flex justify-content-center">
            <img src={RobertinhoPiscando} alt="" />
          </div>
          <div className="fala-R box d-flex p-0">
            <p className="text-center">
              O RoberTeach possui diversos benefícios...
            </p>
          </div>
        </div>

        <div className="Beneficios col-md-14 d-flex justify-content-center mt-4">
          <div className="col-md-6 d-flex flex-column gap-4 ps-5">
            <div className="Benef gap-4 d-flex mt-4">
              <div className="icons">
                <i className="bi bi-journal-bookmark Journal"></i>
              </div>
              <div className="FalaBene text-center w-70">
                <p className="paragrafoFb">
                  Abre novas possibilidades de estudos na sala de aula
                </p>
              </div>
            </div>
            <div className="Benef gap-4 d-flex">
              <div className="d-flex align-items-center">
                <i className="bi bi-lamp-fill Lamp"></i>
              </div>
              <div className="FalaBeneAbajur text-center">
                <p className="paragrafoFb">Gestão educacional mais eficiente</p>
              </div>
            </div>
            <div className="Benef gap-4 d-flex">
              <div className="d-flex align-items-center">
                <i className="bi bi-alarm-fill Clock"></i>
              </div>
              <div className="FalaBeneRelogio text-center">
                <p className="paragrafoFb ps-2 pe-2">
                  Diminui a carga horária e a falta de tempo dos professores
                </p>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column gap-5 align-items-center mt-5 pt-1">
            <div className="Benef gap-4 d-flex">
              <div className="d-flex align-items-center">
                <i className="bi bi-hand-index-thumb Finger"></i>
              </div>
              <div className="FalaBeneDedo text-center">
                <p className="paragrafoFb">
                  Aprendizagem mais interativa e dinâmica
                </p>
              </div>
            </div>
            <div className="Benef gap-4 d-flex">
              <div className="d-flex align-items-center">
                <i className="bi bi-coin Money"></i>
              </div>
              <div className="FalaBeneDinheiro text-center">
                <p className="paragrafoFb">
                  Redução de custos com tarefas manuais
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="EntrarAt gap-5 d-flex justify-content-center mt-5 pt-4">
          <img src={SetinhaVoltar} alt="" className="setinha" />
          <Link className="btn btn-primary-A" to={"../Atividades"}>
            <div className="d-flex justify-content-center mt-1">
              <p>Prosseguir</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Beneficios;
