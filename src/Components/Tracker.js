import React from "react";

export const Tracker = ({ questions, currentQuestion }) => {
  return (
    <div className="tracker">
      <p className="tracker-label">Question: </p>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            {index === currentQuestion ? (
              <p className="tracker-number" style={{color: 'white'}}>
                <strong>{index + 1}</strong>
              </p>
            ) : (
              <p className="tracker-number">
                {index + 1}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
