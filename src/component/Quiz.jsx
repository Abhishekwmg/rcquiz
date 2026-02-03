import { Clock } from "lucide-react";
import quizQuestions from "../data/quizData";
import { useState } from "react";

const Quiz = () => {
  const [activeInd, setActiveInd] = useState(0);
  const [score, setScore] = useState(0);

  function handleNextQuestion() {
    setActiveInd((prevInd) => {
      return prevInd + 1;
    });
  }

  function handleQuizOptions(option, index) {
    if (currentQuiz.correctAnswer === index) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  const currentQuiz = quizQuestions[activeInd];
  return (
    <section>
      Final Score:{score}
      <div>
        <div>
          <span>
            <Clock />
          </span>
          <div>
            <p>Time Remaining</p>
            <p>10:00</p>
          </div>
        </div>
        <button>Submit</button>
      </div>
      <div>
        {/* Main Quiz Screen */}
        <p>Question {activeInd + 1} of 10</p>
        <div key={currentQuiz.id}>
          <p>{currentQuiz.question}</p>
          <div>
            {currentQuiz.options.map((option, index) => {
              return (
                <div key={option}>
                  <button onClick={() => handleQuizOptions(option, index)}>
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
          <button onClick={handleNextQuestion}>Submit</button>
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
