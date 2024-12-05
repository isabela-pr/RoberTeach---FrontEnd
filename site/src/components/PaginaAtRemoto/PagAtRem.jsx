import React from "react";
import "./PagAtRem.css";
import { Link } from "react-router-dom";
import eng1 from "../../assets/eng01.png";

const PagAtRem = () => {
  const activities = [
    { id: 1, title: "Unidade 1", completed: true, path: "/unidade1" }, // exemplo de rota para unidade 1
    { id: 2, title: "Unidade 2", completed: false, path: "/unidade2" },
    { id: 3, title: "Unidade 3", completed: true, path: "/unidade3" },
    // Adicione mais atividades aqui
  ];
  return (
    <div className="roberteach-container">
      <div className="row">
      </div>
    </div>
  );
};

export default PagAtRem;
