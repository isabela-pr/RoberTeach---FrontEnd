import React, { useState, useEffect } from "react";
import Question from "./Question";
import ProgressBar from "../ProgressBar/ProgressBar";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./questions.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const shuffledQuestions = data.questions.sort(
          () => 0.5 - Math.random()
        );
        const tenQuestions = shuffledQuestions.slice(0, 10);
        setQuestions(tenQuestions);
      } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
      } finally {
        setLoading(false); // Define loading como false após a conclusão (sucesso ou erro)
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (questionIndex, isCorrect) => {
    setAnswered(true);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-4 text-center">ENEM Questions</h1>
          {loading ? ( // Exibe loading enquanto estiver carregando
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : questions.length > 0 ? (
            <>
              <ProgressBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
              <Question question={currentQuestion} onAnswer={handleAnswer} />
              {answered && (
                <button
                  className="btn btn-primary mt-3 d-block mx-auto"
                  onClick={nextQuestion}
                >
                  Próxima Questão
                </button>
              )}
            </>
          ) : (
            <p className="mt-4 text-center">Nenhuma questão encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
