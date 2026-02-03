import { Clock } from "lucide-react";
import quizQuestions from "../data/quizData";
import { useState } from "react";

const Quiz = () => {
  const [quizData, setQuizData] = useState(quizQuestions);
  const [activeInd, setActiveInd] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState([]);

  // console.log(quizData[activeInd]);

  function handleNextQuiz() {
    setActiveInd((prevInd) => prevInd + 1);
    setCurrentQuiz([quizData[activeInd]]);
  }

  return (
    <section>
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
        <p>Question 1 of 10</p>
        {currentQuiz.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.question}</p>
              <div>
                {data.options.map((option) => {
                  return (
                    <div key={option}>
                      <button>{option}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {/* Pagination */}
        <button>Prev</button>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <button onClick={handleNextQuiz}>Next</button>
      </div>
    </section>
  );
};

export default Quiz;
