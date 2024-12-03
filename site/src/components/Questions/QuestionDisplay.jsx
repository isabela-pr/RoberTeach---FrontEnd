// QuestionDisplay.js

const QuestionDisplay = ({ questions }) => {
  return (
    <ul>
      {questions.map((question) => (
        <li key={question.index}>
          <h2>{question.title}</h2>
          <p>
            <strong>Contexto:</strong> {question.context}
          </p>
          <h3>Alternativas:</h3>
          <ul>
            {question.alternatives.map((alternative) => (
              <li key={alternative.letter}>
                {alternative.letter}: {alternative.text}{" "}
                {alternative.isCorrect ? "(Correta)" : ""}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default QuestionDisplay;
