import React from "react";
import QuestionDisplay from "./QuestionDisplay"; // Importe o componente de exibição

const Filtro = ({ questions, onFilter }) => {
  // Adicione props para questões e função de filtro

  return (
    <div>
      <h2>Filtro de Questões</h2>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">Todas as Disciplinas</option>
        <option value="matematica">Matemática</option>
        {/* Adicione outras opções */}
      </select>
      {questions && <QuestionDisplay questions={questions} />}{" "}
      {/*Exibe as questões filtradas */}
    </div>
  );
};

export default Filtro;
