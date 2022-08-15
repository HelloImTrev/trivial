var baseDate = new Date("8/11/2022");
var today = new Date();
today.setDate(today.getDate());

export function getQuestions (questions) {
  const diff = Math.floor((today.getTime() - baseDate.getTime()) / 864e5);
  return questions[diff];
}

export const getAnswers = ( question ) => {
  const allAnswers = [];

  const correctAnswer = question.correctAnswer;
  const incorrectAnswers = question.incorrectAnswers;
  
  //Left it open to implment "Shuffle only once"
  allAnswers.push({answer: correctAnswer, shuffled: false});
  incorrectAnswers.forEach(answer => allAnswers.push({
    answer: answer,
    shuffled: false
  }));

  return shuffleAnswers(allAnswers);
};

//Shuffles answer array so correct answer isn't always index 0
const shuffleAnswers = (answers) => {
  for (let i = answers.length -1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));
    const temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }

  return answers;
}

