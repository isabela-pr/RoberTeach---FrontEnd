import React from "react";
import { Link } from "react-router-dom";
import "./EnsinoRemoto.css";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";

const EnsinoRemoto = () => {
  return (
    <>
      <div className="d-flex Robertofalando align-items-end justify-content-end">
        <div className="row m-0 p-0 justify-content-center align-items-center mb-0">
          <div className="col-4 ms-3  d-flex justify-content-center align-items-center">
            <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
          </div>
          <div className="col m-0 me-3 d-flex justify-content-center align-items-center fala-R">
            <p className="m-0">
              Olá, eu sou o Roberto Robô, venha conhecer o meu site!
            </p>
          </div>
        </div>
      </div>
      <div className="login d-grid gap-3 mt-5">
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
