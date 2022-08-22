export const copyToClipboard = (answers) => {
  const currDate = new Date();
  const copyText = `Trivial score ${formatCurrentDate(currDate)} \n
  1. \n
  2. \n
  3. \n
  4. \n
  5. \n`;

  navigator.clipboard.writeText(copyText);
}

const formatCurrentDate = (today) => {
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  return `${mm}/${dd}/${yyyy}:`
}