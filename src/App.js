import React, { useEffect, useState } from "react";
import { questions } from "./Utility/questions";
import { QuestionCards } from "./Components/QuestionCards";
import { getQuestions } from "./Utility/questionFuncs";

export const App = () => {
  const [gameStatus, setGameStatus] = useState(
    JSON.parse(localStorage.getItem("gameStatus"))
  );

  useEffect(() => {
    if (!localStorage.getItem("gameStatus")) {
      localStorage.setItem("gameStatus", JSON.stringify(false));
    } else {
      localStorage.setItem("gameStatus", JSON.stringify(gameStatus));
    }

    if (!localStorage.getItem("answer_key")) {
      localStorage.setItem("answer_key", JSON.stringify([]));
    }
  }, [gameStatus]);

  const pickedQuestions = getQuestions(questions);
  let answer_key = JSON.parse(localStorage.getItem("answer_key"));

  return (
    <div className="root-container">
      {gameStatus ? (
        <div className="game-container">
          <QuestionCards
            questions={pickedQuestions}
            setGameStatus={setGameStatus}
            answer_key={answer_key}
          />
        </div>
      ) : (
        <div>
          <h3>Game not started.</h3>
          <button onClick={() => setGameStatus(true)}>Click to start!</button>
        </div>
      )}
      <div className="credits">
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/HelloImTrev">Trevor Latimer</a>
        </p>
      </div>
    </div>
  );
};
