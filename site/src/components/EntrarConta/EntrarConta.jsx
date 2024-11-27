import React, { useState, useEffect } from "react";
import "./EntrarConta.css"
import RoberTeach from "../../assets/RT-Maior.png";
import { Link } from "react-router-dom";

const EntrarConta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("/api/EntrarConta", { email, password });
      window.location.href = "/EntrarConta";
    } catch (err) {
      setError("Falha ao criar conta");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <img src={RoberTeach} alt="" />
      </div>
      <div className="login-container mt-5 pt-5">
        <form className="login-form" onSubmit={handleSignin}>
          <div className="form-groupEntrar">
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
<Link className="CriarP btn btn-primary-C" to={"../Perfis"} >
  <p>Entrar</p>
</Link>
        {error && <p>{error}</p>}
      </div>
      
    </>
  );
};

export default EntrarConta;
