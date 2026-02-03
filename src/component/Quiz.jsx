import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import quizQuestions from "../data/quizData";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [activeInd, setActiveInd] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timer < 0) return;
    if (!isSubmitted) return;
    const timeout = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  });

  function handleNextQuestion() {
    setActiveInd((prevInd) => {
      return prevInd + 1;
    });
  }

  function handleQuizOptions(index) {
    if (currentQuiz.correctAnswer === index) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedMinute = String(minutes).padStart(2, "0");
  const formattedSecond = String(seconds).padStart(2, "0");

  const currentQuiz = quizQuestions[activeInd];
  return (
    <section>
      <p>Score: {score}</p>
      <div>
        <div>
          <span>
            <Clock />
          </span>
          <div>
            <p>Time Remaining</p>
            <p>{`${formattedMinute} : ${formattedSecond}`}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Question {activeInd + 1} of 10</p>
        <div key={currentQuiz.id}>
          <p>{currentQuiz.question}</p>
          <div>
            {currentQuiz.options.map((option, index) => {
              return (
                <div key={option}>
                  <button onClick={() => handleQuizOptions(index)}>
                    {option}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {activeInd === 9 ? (
          <Link
            to="/score"
            onClick={() => setIsSubmitted((prevSubmit) => !prevSubmit)}
          >
            Submit
          </Link>
        ) : (
          <button disabled={activeInd === 9} onClick={handleNextQuestion}>
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Quiz;
