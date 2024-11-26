import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  return (
    <div>
      <div style={{ width: `${progress}%`, backgroundColor: "green" }}>
        Progresso: {progress.toFixed(0)}% ({currentQuestion}/{totalQuestions})
      </div>
    </div>
  );
};

export default ProgressBar;
