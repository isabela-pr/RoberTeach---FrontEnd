// import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { Outlet } from "react-router-dom";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./questions.json");
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
      }
    };
    fetchData();
  }, []);

  const selectRandomQuestions = () => {
    if (questions.length < 10) {
      setSelectedQuestions(questions);
      return;
    }
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
  };

  return (
    <>
      <div>
        <h1>ENEM Questions</h1>
        <button onClick={selectRandomQuestions}>
          Selecionar 10 Questões Aleatórias
        </button>
        {selectedQuestions.length > 0 && ( //Condicional para exibir apenas depois da seleção
          <QuestionDisplay questions={selectedQuestions} />
        )}
      </div>
      <Outlet />
    </>
  );
};

// function App() {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }

export default App;
