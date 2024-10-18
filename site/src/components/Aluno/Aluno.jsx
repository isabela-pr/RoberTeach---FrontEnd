import React from 'react'
import rodape from "../../assets/rodapeApp.png";
import "./Aluno.css"
import { Link } from 'react-router-dom';
import RoberTeachInstitucional from "../../assets/RoberTeachInstitucional.png"

const Aluno = () => {
  return (
    <>
    <div className="logoRT mt-3">
      <img src={RoberTeachInstitucional} alt="" />
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
          <label htmlFor="Código de turma">Código de turma</label>
          <input
            type="text"
            id="text"
            className="input-field"
            placeholder="Código de turma"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Senha"
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
    <div className="footer d-flex justify-content-center position-fixed">
      <img src={rodape} alt="" />
    </div>
  </>
  )
}

export default Aluno