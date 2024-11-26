import React, { useState, useEffect } from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false); //para controlar o estado da resposta

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
    <div>
      <h1>ENEM Questions</h1>
      {questions.length > 0 && (
        <>
          <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          <Question question={currentQuestion} onAnswer={handleAnswer} />
          {answered && <button onClick={nextQuestion}>Próxima Questão</button>}
        </>
      )}
      {questions.length === 0 && <p>Carregando questões...</p>}
    </div>
  );
};

export default QuestionPage;
