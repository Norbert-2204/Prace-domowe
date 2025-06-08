import { QUESTIONS } from "../quizQuestions.js";
import { useState } from "react";
import Button from "./Button.jsx";
import "../index.css";

const NextQuestion = ({ onComplete }) => {
  const [questionIndex, setIndex] = useState(0);
  const [userAnswer, setUserAnswers] = useState([]);
  const question = QUESTIONS[questionIndex];
  const answers = question.answers;

  const handleAnswer = (answer) => {
    const newAnswer = {
      question: question.text,
      answer: answer.text,
      isCorrect: answer.isCorrect,
    };

    const updatedAnswer = [...userAnswer, newAnswer];

    if (questionIndex + 1 === QUESTIONS.length) {
      onComplete(updatedAnswer);
    } else {
      setUserAnswers(updatedAnswer);
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="general">
      <p style={{ color: "#414df3", fontWeight: "bold" }}>
        Pytanie {questionIndex + 1}: {question.text}
      </p>
      {answers.map((answer, index) => (
        <Button
          style={{ margin: "5px", backgroundColor: "#242424" }}
          key={index}
          onClick={() => handleAnswer(answer)}
        >
          {answer.text}
        </Button>
      ))}
    </div>
  );
};
export default NextQuestion;
