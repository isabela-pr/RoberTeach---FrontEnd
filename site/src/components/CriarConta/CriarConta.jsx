import React, { useState } from "react";
import axios from "axios";
import "./CriarConta.css";
import RoberTeach from "../../assets/RT-Maior.png";
import { Link } from "react-router-dom";
import rodape from "../../assets/rodapeApp.png";

const CriarConta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("/api/CriarConta", { email, password });
      window.location.href = "/EntrarConta";
    } catch (err) {
      setError("Falha ao criar conta");
    }
  };

  return (
    <>
      <div className="row w-100 m-0">
        <div className="d-flex justify-content-start mt-2">
          <img src={RoberTeach} alt="" className="imagemRT"/>
        </div>
        <div className="login-container mt-5 pt-5">
          <form className="login-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="@mail.com"
                id="email"
                value={email}
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                placeholder="Senha"
                id="password"
                value={password}
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
                required
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
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default CriarConta;
