import Button from "./Button";

const QuizSummary = ({ answers, onRestart }) => {
  const correctCount = answers.filter((answer) => answer.isCorrect).length;
  const totalQuestions = answers.length;
  const calculate = Math.round((correctCount / totalQuestions) * 100);
  const passed = correctCount >= 8;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="results">
        <h1 style={{ color: passed ? "green" : "red" }}>
          {passed
            ? "Gratulacje! Quiz zaliczony!"
            : "Niestety, quiz nie zaliczony"}
        </h1>
        <h2>
          Twój wynik to:{" "}
          <span style={{ color: passed ? "green" : "red" }}>
            {calculate.toFixed(2)}%
          </span>{" "}
          ({correctCount} z 10 poprawnych odpowiedzi)
        </h2>
        {answers.map((ans, index) => (
          <div key={index}>
            <p>
              <strong style={{ color: "#414df3" }}>
                Pytanie {index + 1}: {ans.question}
              </strong>
            </p>
            <p>
              Twoja odpowiedź:{" "}
              <span style={{ color: ans.isCorrect ? "green" : "red" }}>
                {ans.answer}
              </span>
            </p>
          </div>
        ))}
      </div>
      <Button
        style={{ backgroundColor: "green", padding: "5px" }}
        onClick={onRestart}
      >
        Powrót do startu
      </Button>
    </div>
  );
};
export default QuizSummary;
