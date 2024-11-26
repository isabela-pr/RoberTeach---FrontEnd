import React, { useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    onAnswer(question.index, answer.isCorrect); //Envie o index da questão e o resultado da resposta
  };

  return (
    <div>
      <h2>{question.title}</h2>
      <p>
        <strong>Contexto:</strong> {question.context}
      </p>
      <h3>Alternativas:</h3>
      <ul>
        {question.alternatives.map((alternative) => (
          <li
            key={alternative.letter}
            onClick={() => handleAnswer(alternative)}
          >
            <input
              type="radio"
              id={alternative.letter}
              name="answer"
              checked={selectedAnswer === alternative}
              onChange={() => {}} // Evita atualização desnecessária
              disabled={showAnswer}
            />
            <label htmlFor={alternative.letter}>
              {alternative.letter}: {alternative.text}
            </label>
            {showAnswer && (
              <span>
                {" "}
                {alternative.isCorrect ? "(Correta)" : "(Incorreta)"}
              </span>
            )}
          </li>
        ))}
      </ul>
      {showAnswer && selectedAnswer && (
        <p>
          Sua resposta: {selectedAnswer.letter} -{" "}
          {selectedAnswer.isCorrect ? "Correta!" : "Incorreta."}
        </p>
      )}
      {!showAnswer && selectedAnswer === null && <p>Responda a questão</p>}
    </div>
  );
};

export default Question;
