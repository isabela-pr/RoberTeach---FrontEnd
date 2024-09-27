import React from "react";
import "./EntrarConta.css";
import Header from "../Header/Header";
import RoberTeach from "../../assets/RT-Maior.png";
import { Link } from "react-router-dom";
import rodape from "../../assets/rodapeApp.png";

const EntrarConta = () => {
  return (
    <>
      <div className="logoRT mt-5">
        <img src={RoberTeach} alt="" />
      </div>
      <div className="login-container">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="@mail.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Código da Turma"
            />
          </div>

          <div className="form-group">
            <label className="remember-me">
              <input type="checkbox" />
              Lembre-se de mim
            </label>
          </div>
          <Link className="EntrarP btn btn-primary" to={"../Perfis"}>
            <p>Entrar</p>
          </Link>
        </form>
      </div>
      <div className="footer">
        <img src={rodape} alt="" />
      </div>
    </>
  );
};

export default EntrarConta;
