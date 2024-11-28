import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState(null);
  const [questionOrder, setQuestionOrder] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const shuffledQuestions = data.questions.sort(
          () => 0.5 - Math.random()
        );
        setQuestions(shuffledQuestions.slice(0, 10));
        setQuestionOrder([...Array(10).keys()]);
      } catch (error) {
        console.error("Error fetching JSON:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (questionIndex, selectedAlternative) => {
    // Salva a resposta selecionada
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAlternative,
    }));

    const isCorrect = selectedAlternative.isCorrect;
    if (!isCorrect) {
      setWrongAnswers((prev) => [...prev, questionIndex]);
    }
    setShowAnswer(true); // Mostrar a resposta após a escolha
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionOrder.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowAnswer(false); // Resetar para a próxima questão
    } else if (!reviewMode && wrongAnswers.length > 0) {
      setReviewMode(true);
      setQuestionOrder(wrongAnswers);
      setCurrentQuestionIndex(0);
      setWrongAnswers([]); // Resetar erradas no modo revisão
    } else {
      alert("Parabéns! Você concluiu a atividade.");
      setShowResults(true);
    }
  };

  const finishReview = () => {
    setShowReview(false);
    setShowResults(true);
    setReviewMode(false); // Finalizar modo de revisão
  };

  // Função específica para revisão: limpa a resposta selecionada
  const handleAnswerInReview = (questionIndex, selectedAlternative) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAlternative,
    }));

    const isCorrect = selectedAlternative.isCorrect;
    if (!isCorrect) {
      setWrongAnswers((prev) => [...prev, questionIndex]);
    }
    setShowAnswer(true); // Mostrar a resposta após a escolha
  };

  // Para garantir que a primeira questão da revisão não mostre a resposta automaticamente
  useEffect(() => {
    if (reviewMode) {
      setShowAnswer(false); // Resetando showAnswer para false quando entra no modo de revisão
    }
  }, [reviewMode, currentQuestionIndex]);

  const progress = ((currentQuestionIndex + 1) / questionOrder.length) * 100;

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-4 text-center text-primary">ENEM Questions</h1>
          {loading ? (
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : error ? (
            <p className="mt-4 text-center text-danger">Erro: {error}</p>
          ) : showResults ? (
            <div className="text-center">
              <p className="text-success">
                Você acertou{" "}
                {((questions.length - wrongAnswers.length) / questions.length) *
                  100}
                % das questões!
              </p>
            </div>
          ) : (
            <>
              <ProgressBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questionOrder.length}
              />
              <Question
                question={questions[questionOrder[currentQuestionIndex]]}
                onAnswer={handleAnswer}
                questionIndex={currentQuestionIndex}
                selectedAnswers={selectedAnswers}
                showAnswer={showAnswer}
              />
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary mt-3"
                  onClick={nextQuestion}
                  disabled={!selectedAnswers[currentQuestionIndex]}
                >
                  Próxima Questão
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
