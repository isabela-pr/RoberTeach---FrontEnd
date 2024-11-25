import React, { useState, useEffect } from "react";
import QuestionDisplay from "./QuestionDisplay";
import Filtro from "./Filtro";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]); // Estado para questões filtradas

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./questions.json");
        const data = await response.json();
        setQuestions(data.questions);
        setFilteredQuestions(data.questions); // Inicializa com todas as questões
      } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (filters) => {
    const filtered = questions.filter((question) => {
      return (
        (!filters.discipline || question.discipline === filters.discipline) &&
        (!filters.year || question.year === filters.year)
      );
    });
    setFilteredQuestions(filtered);
  };

  const selectRandomQuestions = () => {
    if (filteredQuestions.length < 10) {
      //Seleciona todas questões filtradas caso haja menos de 10
      return;
    }
    const shuffledQuestions = [...filteredQuestions].sort(
      () => 0.5 - Math.random()
    );
    const randomTen = shuffledQuestions.slice(0, 10);
    setFilteredQuestions(randomTen);
  };

  return (
    <div>
      <h1>ENEM Questions</h1>
      <button onClick={selectRandomQuestions}>
        Selecionar 10 Questões Aleatórias (após filtro)
      </button>
      <Filtro questions={questions} onFilter={handleFilter} />
      {filteredQuestions.length > 0 && ( //Condicional para exibir apenas se houver questões filtradas
        <QuestionDisplay questions={filteredQuestions} />
      )}
      {filteredQuestions.length === 0 && (
        <p>Nenhuma questão encontrada com esses filtros.</p>
      )}
    </div>
  );
};

export default QuestionPage;
