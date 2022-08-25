export const copyToClipboard = (answers) => {
  const currDate = new Date();
  let copyText = `Trivial score ${formatCurrentDate(currDate)} \n`;

  console.log(answers);

  answers.forEach((answer, index) => {

    if (answer === "correct") {
      copyText = copyText + `✅\n`;
    } else {
      copyText = copyText + `❌\n`;
    }    
  });

  if(navigator.canShare) {
    navigator.share({
      text: copyText
    }).then(() => console.log("Shared"))
      .catch(e => console.log(e));
  } else {
    navigator.clipboard.writeText(copyText);
  }
 
}

const formatCurrentDate = (today) => {
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  return `${mm}/${dd}/${yyyy}:`
}