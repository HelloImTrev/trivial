import React, { useEffect, useState } from "react";
import { getAnswers } from "../Utility/questionFuncs";
import { Answers } from "./Answers";
import { Tracker } from "./Tracker";

export const QuestionCards = ({ questions, setGameStatus }) => {
  const [currentQuestion, setCurrentQuestion] = useState(JSON.parse(localStorage.getItem("answer_key")).length);
  const [answers, setAsnwers] = useState([]);

  useEffect(() => {
    setAsnwers(getAnswers(questions[currentQuestion]));
    
  }, [currentQuestion]);

  //Checks if answer picked was correct, if so stores in local storage
  //"answer_key" to track what question the user left off on
  //This prevents being able to refresh to restart the game
  const checkAnswer = (answer, question) => {
    let answer_key = JSON.parse(localStorage.getItem("answer_key"));
  
    if (answer === question.correctAnswer) {
      answer_key[currentQuestion] = "correct";
      localStorage.setItem("answer_key", JSON.stringify(answer_key));
    } else {
      answer_key[currentQuestion] = "incorrect";
      localStorage.setItem("answer_key", JSON.stringify(answer_key));
    }
  };

  const nextQuestion = () => {
    if(currentQuestion === 4) {
      setGameStatus(false);
      localStorage.setItem("answer_key", JSON.stringify([]));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  console.log(answers);

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
        />
      </div>
      <div className="question-card-footer">
        <Tracker questions={questions} currentQuestion={currentQuestion} />
        <button className="next-button" onClick={() => nextQuestion()}>Next Question</button>
      </div> 
    </div>
  );
};
