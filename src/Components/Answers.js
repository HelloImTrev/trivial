import React from "react";

export const Answers = ({ answers, questions, currentQuestion, checkAnswer }) => {
  return (
    <>
      {answers.map((answer, index) => {
        return (
          <div key={index}>
            <button
              className="answer-button"
              onClick={() => checkAnswer(answer, questions[currentQuestion])}
            >
              {answer.answer}
            </button>
          </div>
        );
      })}
    </>
  );
};
