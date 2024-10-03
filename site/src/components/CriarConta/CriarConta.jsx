import React from "react";
import "./CriarConta.css";
import RoberTeach from "../../assets/RT-Maior.png";
import { Link } from "react-router-dom";
import rodape from "../../assets/rodapeApp.png";

const CriarConta = () => {
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
            <label htmlFor="Nome de usuário">Nome de usuário</label>
            <input
              type="text"
              id="text"
              className="input-field"
              placeholder="Nome de usuário"
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
        </form>
          <Link className="CriarP btn btn-primary-C" to={"../Beneficios"}>
            <p>Criar</p>
          </Link>
      </div>
      <div className="footer">
        <img src={rodape} alt="" />
      </div>
    </>
  );
};

export default CriarConta;
