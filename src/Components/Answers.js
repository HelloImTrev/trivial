import React, { useRef } from "react";

export const Answers = ({
  answers,
  questions,
  currentQuestion,
  checkAnswer,
  answerKey,
  answerButtons
}) => {
   
  

  return (
    <>
      {answers.map((answer, index) => {
        return (
            <button
              key={index}
              ref={answerButtons.current[index]}
              className="answer-button"
              onClick={() => checkAnswer(answer, questions[currentQuestion])}
            >
              {answer.answer}
            </button>
        );
      })}
    </>
  );
};
