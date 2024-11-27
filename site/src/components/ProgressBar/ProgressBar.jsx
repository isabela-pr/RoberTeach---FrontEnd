// ProgressBar.js
import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        Progresso: {progress.toFixed(0)}% ({currentQuestion}/{totalQuestions})
      </div>
    </div>
  );
};

export default ProgressBar;
