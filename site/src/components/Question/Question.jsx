import { useState, useEffect } from "react";
import robertoPiscando from "../../assets/robertinhoPiscando.png";

const Question = ({
  question,
  onAnswer,
  questionIndex,
  selectedAnswers,
  showAnswer,
  nextQuestion,
  isLastQuestion,
  wrongAnswers,
  reviewMode,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerConfirmed, setAnswerConfirmed] = useState(false);
  const [robertoMessage, setRobertoMessage] = useState(
    "Responda as questões corretamente!"
  );

  useEffect(() => {
    setSelectedAlternative(null);
    setErrorMessage("");
    setFeedbackMessage("");
    setShowFeedback(false);
    setAnswerConfirmed(false);
    setRobertoMessage("Responda as questões corretamente!");
  }, [questionIndex]);

  const handleAnswerChange = (alternative) => {
    setSelectedAlternative(alternative);
    setErrorMessage("");
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    if (!selectedAlternative) {
      setErrorMessage(
        "Por favor, selecione uma alternativa antes de confirmar."
      );
      return;
    }

    onAnswer(questionIndex, selectedAlternative);

    const feedback = selectedAlternative.isCorrect
      ? "Parabéns! Você acertou esta questão.🥳"
      : "Ops! Resposta incorreta.";

    setFeedbackMessage(feedback);
    setShowFeedback(true);
    setAnswerConfirmed(true);

    if (selectedAlternative.isCorrect) {
      setRobertoMessage("Parabéns! Você acertou!");
    } else {
      setRobertoMessage("Ops! Tente novamente!");
    }
  };

  const isCorrect = showAnswer && selectedAlternative?.isCorrect;
  const showThisFeedback = showAnswer && showFeedback;

  return (
    <div className="cardQuestion card mt-4">
      <div className="container d-flex justify-content-center align-items-center mb-3">
        <div className="mt-3 box p-2 w-50">
          <img src={robertoPiscando} alt="Roberto" />
        </div>
        <div className="fala-roberto box d-flex justify-content-center align-items-center">
          <p className="m-0">{robertoMessage}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{question.title}</h2>
        <p className="card-text">
          <strong>Contexto:</strong> {question.context}
        </p>
        <h3 className="mt-3">Alternativas:</h3>
        <div className="form-check">
          {question.alternatives.map((alternative) => (
            <div key={alternative.letter} className="form-check">
              <input
                className="form-check-input formCheck"
                type="radio"
                id={alternative.letter}
                name={`answer-${questionIndex}`}
                checked={selectedAlternative === alternative}
                onChange={() => handleAnswerChange(alternative)}
                disabled={answerConfirmed || showAnswer}
              />
              <label className="form-check-label" htmlFor={alternative.letter}>
                {alternative.letter}: {alternative.text}
              </label>
            </div>
          ))}
        </div>

        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}

        {showThisFeedback && (
          <p
            className={`feedback-message text-fb mt-3 ${
              isCorrect ? "correct" : "incorrect"
            }`}
          >
            {feedbackMessage}
          </p>
        )}

        <div className="d-flex justify-content-end gap-2 mt-3">
          {!answerConfirmed && !showAnswer && (
            <button
              className="btn btn-primary flex justify-center items-center h-10 px-6"
              onClick={handleSubmit}
            >
              Confirmar Resposta
            </button>
          )}

          {showAnswer && (
            <>
              {!isLastQuestion && (
                <button
                  className="btn btn-primary"
                  onClick={nextQuestion}
                  disabled={!showAnswer}
                >
                  Próxima Questão
                </button>
              )}

              {isLastQuestion && wrongAnswers > 0 && (
                <button
                  className="btn btn-error"
                  onClick={nextQuestion}
                  disabled={!showAnswer}
                >
                  Revisar Erros
                </button>
              )}
              {isLastQuestion && wrongAnswers === 0 && (
                <button
                  className="btn btn-secondary"
                  onClick={nextQuestion}
                  disabled={!showAnswer}
                >
                  Ver Resultados
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
