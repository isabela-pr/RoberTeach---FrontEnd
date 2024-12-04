import { useState, useEffect } from "react";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";

const QuestionPageCN = () => {
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
  const [reviewButtonText, setReviewButtonText] = useState("Finalizar Revisão");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
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
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAlternative,
    }));
    const isCorrect = selectedAlternative.isCorrect;
    if (!isCorrect) {
      setWrongAnswers((prev) => [...prev, questionIndex]);
    }
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionOrder.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowAnswer(false);
    } else if (!reviewMode && wrongAnswers.length > 0) {
      setReviewMode(true);
      setQuestionOrder(wrongAnswers);
      setCurrentQuestionIndex(0);
      setWrongAnswers([]);
    } else if (
      reviewMode &&
      currentQuestionIndex === questionOrder.length - 1
    ) {
      setReviewButtonText("Ver Resultados");
      setShowResults(true);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questionOrder.length) * 100;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          {/* <h1 className="mt-4 text-center">ENEM Questions</h1> */}
          {loading ? (
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : error ? (
            <p className="mt-4 text-center">Erro: {error}</p>
          ) : showResults ? (
            <div>
              <p>
                Você acertou{" "}
                {((questions.length - wrongAnswers.length) / questions.length) *
                  100}
                % das questões!
              </p>
            </div>
          ) : showReview ? (
            <div>
              <h2>Revise as questões erradas:</h2>
              <ul>
                {wrongAnswers.map((index) => (
                  <li key={`${index}-review`}>
                    <Question
                      key={`${index}-review`}
                      question={questions[index]}
                      onAnswer={handleAnswer}
                      questionIndex={index}
                      selectedAnswers={selectedAnswers}
                      showAnswer={showAnswer}
                      reviewMode={true}
                    />
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary mt-4" onClick={nextQuestion}>
                {reviewButtonText}
              </button>
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
                questionIndex={questionOrder[currentQuestionIndex]}
                selectedAnswers={selectedAnswers}
                showAnswer={showAnswer}
                nextQuestion={nextQuestion}
                isLastQuestion={
                  currentQuestionIndex === questionOrder.length - 1
                }
                wrongAnswers={wrongAnswers.length}
                reviewMode={reviewMode}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPageCN;
