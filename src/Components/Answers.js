import React, { useRef } from "react";

export const Answers = ({
  answers,
  questions,
  currentQuestion,
  answer_key,
  answerButtons,
  nextButton,
  setAnswered,
  timeExpired,
}) => {
  const checkAnswer = (answer, question) => {
    nextButton.current.className = "next-button";
    nextButton.current.disabled = false;

    for (const button of answerButtons.current) {
      button.current.disabled = true;
    }

    const correctButton = answerButtons.current.find(
      (button) => button.current.innerHTML === question.correctAnswer
    );
    const selectedAnswer = answerButtons.current.find(
      (button) => button.current.innerHTML === answer.answer
    );

    if (answer.answer === question.correctAnswer) {
      answer_key[currentQuestion] = "correct";
      localStorage.setItem("answer_key", JSON.stringify(answer_key));
      selectedAnswer.current.style.backgroundColor = "#b1f1cd";
      setAnswered(true);
    } else {
      answer_key[currentQuestion] = "incorrect";
      localStorage.setItem("answer_key", JSON.stringify(answer_key));
      selectedAnswer.current.style.backgroundColor = "#fc6060";
      correctButton.current.style.backgroundColor = "#b1f1cd";
      setAnswered(true);
    }
  };
  ///// Function for timer hitting zero if implemented /////
  // if (timeExpired) {
  //   nextButton.current.className = "next-button";
  //   nextButton.current.disabled = false;

  //   for (const button of answerButtons.current) {
  //     button.current.disabled = true;
  //   }

  //   const correctAnswer = answerButtons.current.find(
  //     (button) => button.current.innerText === questions[currentQuestion].correctAnswer
  //   );

  //   answer_key[currentQuestion] = "incorrect";
  //   localStorage.setItem("answer_key", JSON.stringify(answer_key));
  //   correctAnswer.current.style.backgroundColor = "#b1f1cd";
  //   setAnswered(true);
  // };

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
