import React, { useEffect } from "react";

export const PreGame = ({ setGameStatus }) => {
  const prevAnswers = JSON.parse(localStorage.getItem("prev_answers"));
  let correctCount = 0;
  let percentage = 0;

  if (prevAnswers) {
    for(let i = 0; i < prevAnswers.length; i++) {
      if (prevAnswers[i] === "correct") {
        correctCount += 1;
      }
    }

   percentage = (correctCount / prevAnswers.length) * 100;
  };

  return (
    <div className="pre-game-card">
      <div>
        <h3 className="pre-game-title">Start today's Trivial?</h3>
      </div>

      <div className="previous-score">
        <strong>
          <p className="pre-score-label">Previous Score:</p>
        </strong>
        {prevAnswers ? (
          <p className="pre-score">{correctCount} / {prevAnswers.length} ({percentage}%)</p>
        ) : (
          <p className="pre-score">No score</p>
        )}
      </div>

      <button className="start-button" onClick={() => setGameStatus(true)}>
        Click to start!
      </button>
    </div>
  );
};
