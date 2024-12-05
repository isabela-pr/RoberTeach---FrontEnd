import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";

const QuestionPageCH = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [questionOrder, setQuestionOrder] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewButtonText, setReviewButtonText] = useState("Finalizar Revisão");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questionsCH.json");
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        const shuffledQuestions = data.questions.sort(
          () => 0.5 - Math.random()
        );
        setQuestions(shuffledQuestions.slice(0, 10));
        setQuestionOrder([...Array(10).keys()]);
      } catch (error) {
        console.error("Erro ao buscar JSON:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (questionIndex, selectedAlternative) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAlternative,
    }));
    const isCorrect = selectedAlternative.isCorrect;
    if (!isCorrect) {
      setWrongAnswers((prev) => [...prev, questionIndex]);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionOrder.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (!reviewMode && wrongAnswers.length > 0) {
      setReviewMode(true);
      setQuestionOrder(wrongAnswers);
      setCurrentQuestionIndex(0);
      setWrongAnswers([]);
    } else if (
      reviewMode &&
      currentQuestionIndex === questionOrder.length - 1
    ) {
      setShowModal(true);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questionOrder.length) * 100;

  const correctAnswers = questions.length - wrongAnswers.length;
  const incorrectAnswers = wrongAnswers.length;

  const resultsData = questions.map((question, index) => ({
    question: question.title,
    isCorrect: !wrongAnswers.includes(index),
    selectedAnswer: selectedAnswers[index]?.text || null,
    correctAnswer:
      question.alternatives.find((alt) => alt.isCorrect)?.text || null,
  }));

  const clearState = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setWrongAnswers([]);
    setReviewMode(false);
    setQuestionOrder([...Array(10).keys()]); // Reordena as questões
    setShowResults(false);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          {loading ? (
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : error ? (
            <p className="mt-4 text-center">Erro: {error}</p>
          ) : showResults ? (
            <p>
              Você acertou{" "}
              {((questions.length - wrongAnswers.length) / questions.length) *
                100}
              % das questões!
            </p>
          ) : (
            <>
              <ProgressBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questionOrder.length}
              />
              <Question
                question={questions[questionOrder[currentQuestionIndex]]}
                onAnswer={handleAnswer}
                questionIndex={questionOrder[currentQuestionIndex]}
                selectedAnswers={selectedAnswers}
                nextQuestion={nextQuestion}
                isLastQuestion={
                  currentQuestionIndex === questionOrder.length - 1
                }
                wrongAnswers={wrongAnswers.length}
                reviewMode={reviewMode}
              />
            </>
          )}
          <Modal
            show={showModal}
            handleClose={() => setShowModal(false)}
            resultsData={resultsData}
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            clearState={clearState}
          />{" "}
          {/* Passando clearState para o Modal */}
        </div>
      </div>
    </div>
  );
};

export default QuestionPageCH;
