// Filtro.js
import React from "react";
import QuestionDisplay from "./QuestionDisplay";

const Filtro = ({ questions, onFilter }) => {
  return (
    <div>
      <h2>Filtro de Questões</h2>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">Todas as Disciplinas</option>
        <option value="matematica">Matemática</option>
        {/* Adicione outras opções */}
      </select>
      {questions && <QuestionDisplay questions={questions} />}
    </div>
  );
};

export default Filtro;
