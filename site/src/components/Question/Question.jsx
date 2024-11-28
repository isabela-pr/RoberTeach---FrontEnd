import React, { useState } from "react";

const Question = ({
  question,
  onAnswer,
  questionIndex,
  selectedAnswers,
  showAnswer,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(null);

  const handleAnswerChange = (alternative) => {
    setSelectedAlternative(alternative);
  };

  const handleSubmit = () => {
    onAnswer(questionIndex, selectedAlternative);
  };

  const isAnswered = selectedAlternative !== null;
  const isCorrect = showAnswer && selectedAlternative?.isCorrect;

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
          <div>
            {isCorrect ? (
              <p className="text-success">Resposta correta!</p>
            ) : isAnswered ? (
              <p className="text-danger">Resposta incorreta.</p>
            ) : (
              <p>Selecione uma alternativa</p>
            )}
          </div>
        )}
        {!showAnswer && isAnswered && (
          <button className="btn btn-primary mt-2" onClick={handleSubmit}>
            Confirmar Resposta
          </button>
        )}
        {!showAnswer && !isAnswered && (
          <p>Selecione uma alternativa para continuar.</p>
        )}
      </div>
    </div>
  );
};

export default Question;
