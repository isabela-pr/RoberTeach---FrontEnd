import React, { useState, useEffect } from "react";

const Question = ({
  question,
  onAnswer,
  questionIndex,
  selectedAnswers,
  showAnswer,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSelectedAlternative(null);
    setErrorMessage("");
  }, [questionIndex]);

  const handleAnswerChange = (alternative) => {
    setSelectedAlternative(alternative);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (!selectedAlternative) {
      setErrorMessage(
        "Por favor, selecione uma alternativa antes de confirmar."
      );
      return;
    }
    onAnswer(questionIndex, selectedAlternative);
  };

  const isCorrect = showAnswer && selectedAlternative?.isCorrect;

  return (
    <div className="custom-question card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="text-primary">{question.title}</h4>
        <p>
          <strong>Contexto:</strong> {question.context}
        </p>
        <h5 className="mt-3">Alternativas:</h5>
        <div>
          {question.alternatives.map((alternative) => (
            <div key={alternative.letter} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={alternative.letter}
                name={`answer-${questionIndex}`}
                checked={selectedAlternative === alternative}
                onChange={() => handleAnswerChange(alternative)}
                disabled={showAnswer}
              />
              <label className="form-check-label" htmlFor={alternative.letter}>
                {alternative.letter}: {alternative.text}
              </label>
            </div>
          ))}
        </div>
        {showAnswer && (
          <div className="mt-3">
            {isCorrect ? (
              <p className="text-success">Resposta correta!</p>
            ) : (
              <p className="text-danger">Resposta incorreta.</p>
            )}
          </div>
        )}
        {!showAnswer && (
          <>
            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
            <button
              className="btn btn-primary mt-3 px-4"
              onClick={handleSubmit}
              disabled={showAnswer}
            >
              Confirmar Resposta
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
