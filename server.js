const express = require("express");
const axios = require("axios");
const path = require("path");
const { symlink } = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

////// Route to GET questions from API so data can be parsed //////
// app.get("/questions", async (req, res) => {
//   let stopped = false;
//   let count = 0;
//   let questions = [];
//   const subQuestions = [];
//   let temp = [];
//   let questionIDs = [];
//   let hashMap = {};

//   while (!stopped) {
//     let res = await axios.get(
//       "https://the-trivia-api.com/api/questions?limit=50"
//     );

//     res.data.forEach((question) => {
//       if (!questionIDs.includes(question.id)) {
//         questions.push(question);
//         questionIDs.push(question.id);
//       }
//     });

//     count += 1;

//     if (count === 20) {
//       stopped = true;
//     }
//   }

//   questions.forEach((question) => {
//     if (hashMap[question.id]) {
//       hashMap[question.id] = hashMap[question.id] + 1;
//     }
//     hashMap[question.id] = 1;
//   });

//   let remainder = questions.length % 5;

//   if (remainder !== 0) {
//     questions = questions.slice(remainder);
//   }

//   console.log(questions.length);

//   questions.forEach((question) => {
//     if (temp.length === 5) {
//       subQuestions.push(temp);
//       temp = [];
//     }

//     temp.push(question);
//   })

//   res.send(subQuestions);
//   });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
