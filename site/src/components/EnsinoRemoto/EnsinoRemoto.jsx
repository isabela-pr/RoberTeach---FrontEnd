import React from "react";
import { Link } from "react-router-dom";
import "./EnsinoRemoto.css";
import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";

const EnsinoRemoto = () => {
  return (
    <>
    <div className="row w-100">
      <div className="Robertofalando col-md-11 d-flex align-items-center justify-content-center mt-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center g-3">
            <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
          </div>
          <div className="col m-0 me-3 d-flex justify-content-center align-items-center fala-R">
            <p className="m-0 text-center">
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
    </div>
    </>
  );
};

export default EnsinoRemoto;
