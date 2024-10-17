import React, { useState } from "react";
import axios from 'axios';
import "./EntrarConta.css";
import RoberTeach from "../../assets/RT-Maior.png";
import { Link } from "react-router-dom";
import rodape from "../../assets/rodapeApp.png";

const EntrarConta = async () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlelogin = async (e) => {
    e.preventDefault();
  }

  try{
    const response = await axios.post('/api/EntrarConta', {email, password});
    localStorage.setItem('token', response.data.token);
    window.location.href = '../Perfis';
  } catch (err){
    setError('Falha ao Entrar na Conta. Verifique suas credenciais');
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <img src={RoberTeach} alt="" />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handlelogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="@mail.com"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Código da Turma"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="remember-me">
              <input type="checkbox" />
              Lembre-se de mim
            </label>
          </div>
          <Link className="EntrarP btn btn-primary-E d-flex justify-content-center" to={"../Perfis"}>
            <p>Entrar</p>
          </Link>
          {error && <p>{error}</p>}
        </form>
      </div>
      <div className="footer">
        <img src={rodape} alt="" />
      </div>
    </>
  );
};

export default EntrarConta;
