import Button from "./Button";
import "../index.css";

const StartQuiz = ({ onStart }) => {
  return (
    <div className="general">
      <h1>Javascript Quiz</h1>
      <Button
        style={{ backgroundColor: "#414df3", padding: "5px" }}
        onClick={onStart}
      >
        Rozpocznij Quiz
      </Button>
    </div>
  );
};
export default StartQuiz;
