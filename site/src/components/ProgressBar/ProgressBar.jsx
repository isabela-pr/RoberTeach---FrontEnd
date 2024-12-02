import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);
  return (
    <div className="progress mt-3 m-auto text-center">
      {" "}
      {/* Adicionei m-auto e text-center */}
      <div
        className="progress-bar"
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
