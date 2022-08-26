import React, { useEffect, useState } from "react";
import { questions } from "./Utility/questions";
import { QuestionCards } from "./Components/QuestionCards";
import { getQuestions } from "./Utility/questionFuncs";
import { PreGame } from "./Components/PreGame";
import { Nav } from "./Components/Nav";

export const App = () => {
  const [gameStatus, setGameStatus] = useState(
    JSON.parse(localStorage.getItem("gameStatus"))
  );

  useEffect(() => {
    let last_played = new Date(
      new Date(localStorage.getItem("last_played")).setHours(0, 0, 0, 0)
    );
    let date = new Date(new Date().setHours(0, 0, 0, 0));
    const diff = Math.floor((date.getTime() - last_played.getTime()) / 864e5);

    if(diff >= 1) {
      setGameStatus(false);
      const prevAnswers = JSON.parse(localStorage.getItem("answer_key"));

      localStorage.setItem("prev_answers", JSON.stringify(prevAnswers));
      localStorage.setItem("answer_key", JSON.stringify([]));
    }

    if (!localStorage.getItem("gameStatus")) {
      localStorage.setItem("gameStatus", JSON.stringify(false));
    } else {
      localStorage.setItem("gameStatus", JSON.stringify(gameStatus));
    }

    if (!localStorage.getItem("answer_key")) {
      localStorage.setItem("answer_key", JSON.stringify([]));
    }

    if (!localStorage.getItem("streak")) {
      localStorage.setItem("streak", JSON.stringify(0));
    }
  }, [gameStatus]);

  const pickedQuestions = getQuestions(questions);
  let answer_key = JSON.parse(localStorage.getItem("answer_key"));

  return (
    <div className="root-container">
      <Nav />
      {gameStatus ? (
        <div className="game-container">
          <QuestionCards
            questions={pickedQuestions}
            setGameStatus={setGameStatus}
            gameStatus={gameStatus}
            answer_key={answer_key}
          />
        </div>
      ) : (
        <div className="pre-game-container">
          <PreGame setGameStatus={setGameStatus} />
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
