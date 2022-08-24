import React from "react";

export const Rules = ({ setSeeRules }) => {
  return (
    <div className="rules-container">
      <div className="rules">
        <div className="rules-title-container">
          <h2 className="rules-title">Welcome to Trivial!</h2>
        </div>
        <div className="rules-text-container">
          <p className="rules-text">
            Do you like trivia and testing your knowledge on fun facts? Then
            you're in the right place! Trivial is your daily dose of trivia
            knowledge that quizzes you on <strong>5</strong> random questions
            from <strong>no particular category</strong>. The catch is... you can
            only play Trivial once per day, so make sure you guess wisely!
          </p>
          <p className="rules-text">
            Once you're done you'll be able to share your score, so that you can
            compete with your family and friends!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
            marginTop: "1rem"
          }}
        >
          <button
            className="rules-button"
            style={{ width: "40%" }}
            onClick={() => setSeeRules(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
