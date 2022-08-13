import React, { useEffect, useState } from "react";

 export const QuestionCards = ({questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAsnwers] = useState([]);

  useEffect(() => {
    setAsnwers(getAnswers(currentQuestion));
  }, []);

  console.log(answers);

  const getAnswers = ( question ) => {
    const allAnswers = []
    const correctAnswer = question.correctAnswer;
    const incorrectAnswers = question.incorrectAnswers;
    
    allAnswers.push(correctAnswer);
    incorrectAnswers.forEach(answer => allAnswers.push(answer));

    return allAnswers;
  };


  return(
    <div>
      <h2 className="question">{currentQuestion.question}</h2>
    </div>
  )
}