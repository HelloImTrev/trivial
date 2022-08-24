import React, { useEffect, useState, useRef, createRef } from "react";
import { getAnswers } from "../Utility/questionFuncs";
import { Answers } from "./Answers";
import { Timer } from "./Timer";
import { Tracker } from "./Tracker";

export const QuestionCards = ({ questions, setGameStatus, answer_key }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAsnwers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const nextButton = useRef();
  const answerButtons = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("answer_key")).length === 5) {
      finishGame();
    } else {
      setCurrentQuestion(JSON.parse(localStorage.getItem("answer_key")).length);
      setAsnwers(getAnswers(questions[currentQuestion]));
      nextButton.current.disabled = true;
      nextButton.current.className = "next-button-disabled";
    }

    console.log('effect');
  }, [currentQuestion]);

  const nextQuestion = () => {
    for (const button of answerButtons.current) {
      button.current.disabled = false;
      button.current.style.backgroundColor = "#eebbc3";
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const finishGame = () => {
    setGameStatus(false);
    const prevAnswers = JSON.parse(localStorage.getItem("answer_key"));

    localStorage.setItem("prev_answers", JSON.stringify(prevAnswers));
    localStorage.setItem("answer_key", JSON.stringify([]));
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
          // checkAnswer={checkAnswer}
          answer_key={answer_key}
          answerButtons={answerButtons}
          nextButton={nextButton}
          timeExpired={timeExpired}
          setAnswered={setAnswered}
        />
      </div>
      <div className="question-card-footer">
        <Tracker questions={questions} currentQuestion={currentQuestion} />
        {currentQuestion === 4 ? (
          <button ref={nextButton} onClick={() => finishGame()}>
            Finish
          </button>
        ) : (
          <button ref={nextButton} onClick={() => nextQuestion()}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};
