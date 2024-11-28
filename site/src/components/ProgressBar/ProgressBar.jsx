import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);
  return (
    <div className="progress mt-3 rounded-pill bg-light">
      <div
        className="progress-bar bg-primary rounded-pill"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
