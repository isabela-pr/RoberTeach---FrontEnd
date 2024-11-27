import React, { useState, useEffect } from "react";

const Question = ({
  question,
  onAnswer,
  questionIndex,
  selectedAnswers,
  attempts,
  resetAnswer,
}) => {
  const handleAnswer = (alternative) => {
    onAnswer(questionIndex, alternative);
  };

  const selectedAlternative = selectedAnswers[questionIndex];
  const isAnswered = selectedAnswers.hasOwnProperty(questionIndex);
  const showCorrectAnswer = isAnswered && (attempts[questionIndex] || 0) >= 2;
  const numAttempts = attempts[questionIndex] || 0;
  const [showRedoButton, setShowRedoButton] = useState(false);
  const [showMaxAttemptsMessage, setShowMaxAttemptsMessage] = useState(false);

  useEffect(() => {
    if (
      isAnswered &&
      !showCorrectAnswer &&
      selectedAlternative &&
      !selectedAlternative.isCorrect
    ) {
      setShowRedoButton(true);
    } else {
      setShowRedoButton(false);
    }
    if (numAttempts >= 2) {
      setShowMaxAttemptsMessage(true);
    }
  }, [isAnswered, showCorrectAnswer, selectedAlternative, numAttempts]);

  return (
    <div className="card mt-4">
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
                className="form-check-input"
                type="radio"
                id={alternative.letter}
                name="answer"
                checked={selectedAlternative === alternative}
                onChange={() => {}}
                disabled={isAnswered && numAttempts >= 2}
                onClick={() => handleAnswer(alternative)}
              />
              <label className="form-check-label" htmlFor={alternative.letter}>
                {alternative.letter}: {alternative.text}
              </label>
            </div>
          ))}
        </div>
        {showCorrectAnswer && (
          <p className="mt-3">
            Resposta correta:{" "}
            {question.alternatives.find((alt) => alt.isCorrect)?.text ||
              "Resposta não encontrada"}
          </p>
        )}
        {isAnswered &&
          !showCorrectAnswer &&
          numAttempts < 2 &&
          showRedoButton && (
            <>
              <p className="mt-3">
                Sua resposta:{" "}
                {selectedAlternative ? selectedAlternative.letter : ""} -
                Incorreta.
              </p>
              <button
                className="btn btn-secondary mt-2 mr-2"
                onClick={() => resetAnswer(questionIndex)}
              >
                Refazer Questão
              </button>
            </>
          )}
        {showMaxAttemptsMessage && (
          <p className="mt-3 text-danger">
            Você atingiu o limite máximo de tentativas para esta questão.
          </p>
        )}
        {isAnswered &&
          !showCorrectAnswer &&
          numAttempts >= 2 &&
          !showRedoButton && (
            <p className="mt-3">
              Sua resposta:{" "}
              {selectedAlternative ? selectedAlternative.letter : ""} -
              Incorreta.
            </p>
          )}

        <div className="d-flex justify-content-between mt-3">
          {isAnswered && (
            <button
              className="btn btn-primary"
              onClick={() => onAnswer(questionIndex, null)}
            >
              Próxima Questão
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
