var baseDate = new Date("8/11/2022");
var today = new Date();
today.setDate(today.getDate());

export function getQuestions (questions) {
  const diff = Math.floor((today.getTime() - baseDate.getTime()) / 864e5);
  console.log(diff);
  return questions[diff];
}

export const getAnswers = ( question ) => {
  const allAnswers = []
  const correctAnswer = question.correctAnswer;
  const incorrectAnswers = question.incorrectAnswers;
  
  allAnswers.push(correctAnswer);
  incorrectAnswers.forEach(answer => allAnswers.push(answer));

  return shuffleAnswers(allAnswers);
};

const shuffleAnswers = (answers) => {
  for (let i = answers.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }

  return answers;
}

