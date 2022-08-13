import React from "react";

 export const QuestionCards = ({questions}) => {
  return(
    <div>
      {questions.map((q, index) => {
        return(
            <h3 key={index}>{q.question}</h3>
        )
      })}
    </div>
  )
}