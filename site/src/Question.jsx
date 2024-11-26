import React, { useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (alternative) => {
    setSelectedAnswer(alternative);
    setShowAnswer(true);
    onAnswer(question.index, alternative.isCorrect);
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">{question.title}</h2>
        <p className="card-text">
          <strong>Contexto:</strong> {question.context}
        </p>
        <h3 className="mt-3">Alternativas:</h3>
        <div className="form-check">
          {" "}
          {/*Utilizando form-check para radio buttons*/}
          {question.alternatives.map((alternative) => (
            <div key={alternative.letter} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={alternative.letter}
                name="answer"
                checked={selectedAnswer === alternative}
                onChange={() => {}}
                disabled={showAnswer}
                onClick={() => handleAnswer(alternative)}
              />
              <label className="form-check-label" htmlFor={alternative.letter}>
                {alternative.letter}: {alternative.text}
              </label>
            </div>
          ))}
        </div>
        {showAnswer && selectedAnswer && (
          <p className="mt-3">
            Sua resposta: {selectedAnswer.letter} -{" "}
            {selectedAnswer.isCorrect ? "Correta!" : "Incorreta."}
          </p>
        )}
        {!showAnswer && selectedAnswer === null && (
          <p className="mt-3">Responda a questão</p>
        )}
      </div>
    </div>
  );
};

export default Question;
