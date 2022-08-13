import React, { useEffect, useState } from "react";
import { questions } from "./Utility/questions";
import { QuestionCards } from "./Components/QuestionCards";
import { getQuestions } from "./Utility/questionFuncs";

export const App = () => {
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    localStorage.setItem('gameStatus', gameStatus);
  }, [gameStatus]);

  const pickedQuestions = getQuestions(questions);

  return (
    <div>
      {localStorage.getItem('gameStatus') ? (
        <QuestionCards questions={pickedQuestions} />
      ):(
        <div>
          <h3>Game not started.</h3>
          <button onClick={() => setGameStatus(true)}>Click to start!</button>
        </div>
      )}
    </div>
  );
};
