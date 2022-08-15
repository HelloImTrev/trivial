import React, { useEffect, useState, useRef, createRef } from "react";
import { getAnswers } from "../Utility/questionFuncs";
import { Answers } from "./Answers";
import { Tracker } from "./Tracker";

export const QuestionCards = ({ questions, setGameStatus, answer_key }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    JSON.parse(localStorage.getItem("answer_key")).length
  );

  const [answers, setAsnwers] = useState([]);
  const [answered, setAnswered] = useState(false);

  const answerButtons = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    setAsnwers(getAnswers(questions[currentQuestion]));
  }, [currentQuestion]);

  //Checks if answer picked was correct, if so stores in local storage
  //"answer_key" to track what question the user left off on
  //This prevents being able to refresh to restart the game
  const checkAnswer = (answer, question) => {
    for (const button of answerButtons.current) {
      button.current.disabled = true;
    }

    const correctButton = answerButtons.current.find(
      (button) => button.current.innerText === question.correctAnswer
    );
   const selectedAnswer = answerButtons.current.find(
      (button) => button.current.innerText === answer.answer
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

  const nextQuestion = () => {
    for (const button of answerButtons.current) {
      button.current.disabled = false;
      button.current.style.backgroundColor = "#eebbc3";
    }

    if (currentQuestion === 4) {
      setGameStatus(false);
      localStorage.setItem("answer_key", JSON.stringify([]));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="question-card">
      <div className="question-text-container">
        <h2 className="question-text">{questions[currentQuestion].question}</h2>
      </div>
      <div className="question-answers">
        <Answers
          answers={answers}
          questions={questions}
          currentQuestion={currentQuestion}
          checkAnswer={checkAnswer}
          answerKey={answer_key}
          answerButtons={answerButtons}
        />
      </div>
      <div className="question-card-footer">
        <Tracker questions={questions} currentQuestion={currentQuestion} />
        <button className="next-button" onClick={() => nextQuestion()}>
          Next Question
        </button>
      </div>
    </div>
  );
};
