import React from 'react'
import rodape from "../../assets/rodapeApp.png";
import "./Aluno.css"
import { Link } from 'react-router-dom';
import RoberTeach from "../../assets/RoberTeach.png"

const Aluno = () => {
  return (
    <>
    <div className="mt-3 d-flex justify-content-center w-100 ">
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
        <Link className="CriarP btn btn-primary-C" to={"../HomeAluno"}>
          <p>Criar</p>
        </Link>
    </div>
    
  </>
  )
}

export default Aluno