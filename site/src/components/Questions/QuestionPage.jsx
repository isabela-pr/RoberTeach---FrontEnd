import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [attempts, setAttempts] = useState({});
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.questions || !Array.isArray(data.questions)) {
          throw new Error(
            "Formato JSON inválido: array 'questions' não encontrado."
          );
        }
        const shuffledQuestions = data.questions.sort(
          () => 0.5 - Math.random()
        );
        const tenQuestions = shuffledQuestions.slice(0, 10);
        setQuestions(tenQuestions);
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
    const newAttempts = { ...attempts };
    const currentAttempts = newAttempts[questionIndex] || 0;

    if (currentAttempts < 2) {
      newAttempts[questionIndex] = currentAttempts + 1;
      setAttempts(newAttempts);
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: selectedAlternative,
      });
    }
  };

  const resetAnswer = (questionIndex) => {
    // Reseta apenas se a resposta estiver incorreta.
    if (
      selectedAnswers[questionIndex] &&
      !selectedAnswers[questionIndex].isCorrect
    ) {
      setSelectedAnswers({ ...selectedAnswers, [questionIndex]: undefined });
      setAttempts({ ...attempts, [questionIndex]: 0 });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: null });
    } else {
      let numCorrect = 0;
      for (let i = 0; i < questions.length; i++) {
        if (selectedAnswers[i] && selectedAnswers[i].isCorrect) {
          numCorrect++;
        }
      }
      setCorrectAnswers(numCorrect);
      setShowResults(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-4 text-center">Questões ENEM</h1>
          {loading ? (
            <p className="mt-4 text-center">Carregando questões...</p>
          ) : error ? (
            <p className="mt-4 text-center">Erro: {error}</p>
          ) : questions.length === 0 ? (
            <p className="mt-4 text-center">Nenhuma questão encontrada.</p>
          ) : showResults ? (
            <div>
              <p>
                Você acertou {correctAnswers} de {questions.length} questões!
              </p>
            </div>
          ) : (
            <>
              <ProgressBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
              {questions && questions.length > currentQuestionIndex && (
                <Question
                  question={questions[currentQuestionIndex]}
                  onAnswer={handleAnswer}
                  questionIndex={currentQuestionIndex}
                  selectedAnswers={selectedAnswers}
                  attempts={attempts}
                  resetAnswer={resetAnswer}
                />
              )}
              <div className="d-flex justify-content-between mt-3">
                {" "}
                {/* Espaçamento entre botões */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
