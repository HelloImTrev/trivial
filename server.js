const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/questions", async (req, res) => {
  let stopped = false;
  let count = 0;
  const questions = [];

  while(!stopped) {
    let questionIDs = [];
    let res = await axios.get('https://the-trivia-api.com/api/questions?limit=5');
  
    questions.push(res.data);
    count += 1;

    if(count === 20) {
      stopped = true;
    }
  }

  res.send(questions);
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
