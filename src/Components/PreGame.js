import React, { useEffect, useState } from "react";
import { copyToClipboard } from "../Utility/share";
import { Answers } from "./Answers";
import { DayTimer } from "./DayTimer";
import { Rules } from "./Rules";

export const PreGame = ({ setGameStatus, gameStatus }) => {
  const [seeRules, setSeeRules] = useState(false);

  const prevAnswers = JSON.parse(localStorage.getItem("prev_answers"));
  let streak = JSON.parse(localStorage.getItem("streak"));
  let last_played = new Date(
    new Date(localStorage.getItem("last_played")).setHours(0, 0, 0, 0)
  );

  let date = new Date(new Date().setHours(0, 0, 0, 0));
  let correctCount = 0;
  let percentage = 0;
  const diff = Math.floor((date.getTime() - last_played.getTime()) / 864e5);


  if (prevAnswers) {
    for (let i = 0; i < prevAnswers.length; i++) {
      if (prevAnswers[i] === "correct") {
        correctCount += 1;
      }
    }

    percentage = (correctCount / prevAnswers.length) * 100;
  }

  const startGame = () => {
    if (diff <= 1) {
      localStorage.setItem("streak", JSON.stringify(streak + 1));
    } else {
      localStorage.setItem("streak", JSON.stringify(1));
    }

    localStorage.setItem("last_played", date);

    setGameStatus(true);
  };

  return (
    <div className="pre-game-card">
      {seeRules ? (<Rules setSeeRules={setSeeRules} />):null}
      {diff > 0 ? (
        <div>
          <div>
            <h3 className="pre-game-title">Start today's Trivial?</h3>
          </div>
          <div className="previous-score">
            <strong>
              <p className="pre-score-label">Previous Score:</p>
            </strong>
            {prevAnswers ? (
              <p className="pre-score">
                {correctCount} / 5 correct ({percentage}%)
              </p>
            ) : (
              <p className="pre-score">No score</p>
            )}
          </div>
          <div className="previous-score">
            <strong>
              <p className="pre-score-label">Streak:</p>
            </strong>
            <p className="pre-score">{streak}</p>
          </div>

          <div className="buttons">
            <button className="start-button" onClick={() => startGame()}>
              Start
            </button>
            <button className="rules-button" onClick={() => setSeeRules(true)}>Rules</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3 className="pre-game-title">Trivial completed for today!</h3>
          </div>
          <div className="previous-score">
            <strong>
              <p className="pre-score-label">Previous Score:</p>
            </strong>
            <p className="pre-score">
              {correctCount} / 5 correct ({percentage}%)
            </p>
          </div>
          <div className="previous-score">
            <strong>
              <p className="pre-score-label">Streak:</p>
            </strong>
            <p className="pre-score">{streak}</p>
          </div>
          <div className="timer-cotainer">
            <div className="timer-text">Next Tirvial available in:</div>
            <div className="timer-numbers">
              <DayTimer diff={diff}/>
            </div>
          </div>
          <button
            className="start-button"
            onClick={() => copyToClipboard(prevAnswers)}
          >
            Share
          </button>
        </div>
      )}
    </div>
  );
};
