import React from "react";
import { Link } from "react-router-dom";
import "./EnsinoRemoto.css";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";

const EnsinoRemoto = () => {
  return (
    <>
      <div className="container">
        <div className="Robertofalando box d-flex justify-content-center align-items-center">
          <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
        </div>
        <div className="fala-R box">
          <p>Olá, eu sou o Roberto Robô, venha conhecer o meu site!</p>
        </div>
      </div>
      <div className="login d-grid gap-3">
        <Link to={"../EntrarConta"} className="EntrarConta btn btn-primary-e ">
          <p>Entre com sua conta</p>
        </Link>
        <Link to={"../CriarConta"} className="CriarConta btn btn-primary-c ">
          <p>Crie uma conta</p>
        </Link>
      </div>
    </>
  );
};

export default EnsinoRemoto;
