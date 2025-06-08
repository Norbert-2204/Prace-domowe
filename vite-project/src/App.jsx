import NextQuestion from "./components/NewQuestion";
import StartQuiz from "./components/QuizBlock";
import { useState } from "react";
import QuizSummary from "./components/QuizSummary";

function App() {
  const [isStarted, setQuizStart] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const restart = () => {
    setQuizStart(false);
    setUserAnswers([]);
  };
  return (
    <>
      <div>
        {!isStarted ? (
          <StartQuiz onStart={() => setQuizStart(true)} />
        ) : userAnswers.length > 0 ? (
          <QuizSummary answers={userAnswers} onRestart={restart} />
        ) : (
          <NextQuestion onComplete={setUserAnswers} />
        )}
      </div>
    </>
  );
}

export default App;
