import React, { useEffect, useState } from "react";
import { getAnswers } from "../Utility/questionFuncs";

export const QuestionCards = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAsnwers] = useState([]);
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    setAsnwers(getAnswers(questions[currentQuestion]));
  }, [currentQuestion]);

  const checkAnswer = (answer, question) => {
    let answer_key = JSON.parse(localStorage.getItem('answer_key'));
    console.log(answer_key);

    if (answer === question.correctAnswer) {
      answer_key[currentQuestion] = 'correct';
      localStorage.setItem('answer_key', JSON.stringify(answer_key));
      // localStorage.setItem('answer_key') = answer_key;
      setCurrentQuestion(currentQuestion + 1);
    } else {
      answer_key[currentQuestion] = 'incorrect';
      localStorage.setItem('answer_key', JSON.stringify(answer_key));
      // localStorage.setItem('answer_key') = answer_key;
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
        {answers.map((answer) => {
          return(
            <div>
              <button className="answer-button"onClick={() => checkAnswer(answer, questions[currentQuestion])} >{answer}</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};
