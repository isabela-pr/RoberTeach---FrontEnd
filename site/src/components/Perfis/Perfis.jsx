import React from "react";
import "./Perfis.css";
import Header from "../Header/Header";
import separador from "../../assets/linha.svg";
import avatarGiovana from "../../assets/Giovana.png";
import avatarMaria from "../../assets/Maria.png";
import avatarLeticia from "../../assets/Leticia.png";
import avatarCeline from "../../assets/Celine.png";
import avatarJoaquina from "../../assets/Joaquina.png";
import avatarPatricia from "../../assets/Patricia.png";
import { Link } from "react-router-dom";

const Perfis = () => {
  return (
    <>
      <div className="row">
        <div className=" container">
          {" "}
          {/* Adicione um container para centralizar */}
          <Header />
          <div className="linha">
            <img src={separador} alt="" />
          </div>
          <h6>Selecione o seu perfil:</h6>
          <div className="localPerfil">
            <div className="column1">
              <div className="col-md-6 col-12 mb-3">
                <Link to={"../PaginaAtRemoto"}>
                <img src={avatarGiovana} alt="Giovana" className="img-perfil" />
                </Link>
                <p>Giovana</p>
              </div>
              <div>
                <img src={avatarMaria} alt="Giovana" className="img-perfil" />
                <p>Maria</p>
              </div>
              <div>
                <img src={avatarLeticia} alt="Giovana" className="img-perfil" />
                <p>Letícia</p>
              </div>
            </div>
            <div className="column2">
              <div>
                <img src={avatarCeline} alt="Giovana" className="img-perfil" />
                <p>Celine</p>
              </div>
              <div>
                <img
                  src={avatarPatricia}
                  alt="Giovana"
                  className="img-perfil"
                />
                <p>Patrícia</p>
              </div>
              <div>
                <img
                  src={avatarJoaquina}
                  alt="Giovana"
                  className="img-perfil"
                />
                <p>Joaquina</p>
              </div>
            </div>
          </div>
          <div className="botoes">
          <Link to={""} className="Editar btn btn-primary-e ">
          <p>Editar</p>
        </Link>
        <Link to={"../EnsinoRemoto"} className="Editar btn btn-primary-e ">
          <p>Sair</p>
        </Link>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="localPerfil">
  {perfil.map((item) => (
    <>
      <div key={item.id} className="perfil">
        <img src={item.Avatar} alt="" />
        <p>{item.nome}</p>
      </div>
    </>
  ))}
</div> */
}

export default Perfis;
