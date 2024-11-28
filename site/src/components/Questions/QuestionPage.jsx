import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState(null);
  const [questionOrder, setQuestionOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.questions || !Array.isArray(data.questions)) {
          throw new Error("Invalid JSON format: 'questions' array not found.");
        }
        const shuffledQuestions = data.questions.sort(
          () => 0.5 - Math.random()
        );
        const tenQuestions = shuffledQuestions.slice(0, 10);
        setQuestions(tenQuestions);
        setQuestionOrder([...Array(tenQuestions.length).keys()]);
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
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedAlternative,
    });
    if (!selectedAlternative.isCorrect) {
      setWrongAnswers([...wrongAnswers, questionIndex]);
    }
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionOrder.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    } else {
      setShowReview(true);
    }
  };

  const calculateScore = () => {
    const numCorrect = questions.length - wrongAnswers.length;
    return Math.round((numCorrect / questions.length) * 100);
  };

  const finishReview = () => {
    setShowReview(false);
    setShowResults(true);
  };

  const areAllQuestionsAnswered = () => {
    return questionOrder.every((index) => selectedAnswers[index] !== undefined);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-4 text-center">ENEM Questions</h1>
          {loading ? (
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : error ? (
            <p className="mt-4 text-center">Erro: {error}</p>
          ) : showResults ? (
            <div>
              <p>Você acertou {calculateScore()}% das questões!</p>
              {/* ... (seu código para exibir os resultados) ... */}
            </div>
          ) : showReview ? (
            <div>
              <h2>Revise as questões erradas:</h2>
              {wrongAnswers.length === 0 ? (
                <p>Parabéns! Você acertou todas as questões!</p>
              ) : (
                <ul>
                  {wrongAnswers.map((index) => (
                    <li key={index}>
                      <Question
                        question={questions[index]}
                        onAnswer={handleAnswer}
                        questionIndex={index}
                        selectedAnswers={selectedAnswers}
                        showAnswer={true}
                      />
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={finishReview}>Mostrar Resultados Finais</button>
            </div>
          ) : (
            <>
              <ProgressBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questionOrder.length}
              />
              {questions.length > 0 &&
                questionOrder.length > currentQuestionIndex && (
                  <Question
                    question={questions[questionOrder[currentQuestionIndex]]}
                    onAnswer={handleAnswer}
                    questionIndex={questionOrder[currentQuestionIndex]}
                    selectedAnswers={selectedAnswers}
                    showAnswer={showAnswer}
                    nextQuestion={nextQuestion}
                  />
                )}
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary mt-2"
                  onClick={nextQuestion}
                  disabled={!showAnswer}
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
