import React from "react";
import "./Perfis.css";
import Header from "../Header/Header";
import separador from "../../assets/linha.svg";

const Perfis = () => {
  const perfil = [
    { id: 2, nome: "Giovanna", Avatar: "../../assets/Giovana.png" },
    { id: 1, nome: "Maria", Avatar: "../../assets/Maria.png" },
    { id: 3, nome: "Leticia", Avatar: "../../assets/Leticia.png" },
    { id: 4, nome: "Celine", Avatar: "../../assets/Celine.png" },
    { id: 5, nome: "Joaquina", Avatar: "../../assets/Joaquina.png" },
    { id: 6, nome: "Patricia", Avatar: "../../assets/Patricia.png" },
  ];

  return (
    <>
      <Header />
      <div className="linha">
        <img src={separador} alt="" />
      </div>
      <h6>Selecione o seu perfil:</h6>

      <div className="localPerfil">
        {perfil.map((item) => (
          <>
            <div key={item.id} className="perfil">
              <img src={item.Avatar} alt="" />
              <p>{item.nome}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Perfis;
