var baseDate = new Date("8/11/2022");
var today = new Date();
today.setDate(today.getDate());

export function getQuestions (questions) {
  const diff = Math.floor((today.getTime() - baseDate.getTime()) / 864e5);
  return questions[diff];
}