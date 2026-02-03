// import { Link } from "react-router-dom";
// import { Clock } from "lucide-react";
// import { useEffect, useState } from "react";
// import quizQuestions from "../data/quizData";

// const Quiz = () => {
//   const [activeInd, setActiveInd] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selected, setSelected] = useState(false);

//   const currentQuiz = quizQuestions[activeInd] ?? null;

//   const [timer, setTimer] = useState(600);

//   useEffect(() => {
//     if (timer < 0) return;
//     const timeout = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);
//     return () => {
//       clearInterval(timeout);
//     };
//   });

//   function handleNextQuestion() {
//     setActiveInd((prevInd) => {
//       return prevInd + 1;
//     });
//   }

//   function handleQuizOptions(index) {
//     if (!currentQuiz) return;
//     if (currentQuiz.correctAnswer === index) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     setSelected((prevSelect) => !prevSelect);
//     2;
//   }

//   const minutes = Math.floor(timer / 60);
//   const seconds = timer % 60;

//   const formattedMinute = String(minutes).padStart(2, "0");
//   const formattedSecond = String(seconds).padStart(2, "0");
//   return (
//     <section>
//       <p>Score: {score}</p>
//       <div>
//         <div>
//           <span>
//             <Clock />
//           </span>
//           <div>
//             <p>Time Remaining</p>
//             <p>{`${formattedMinute} : ${formattedSecond}`}</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p>Question {activeInd + 1} of 10</p>
//         <div key={currentQuiz.id}>
//           <h2>{currentQuiz.question}</h2>
//           <div>
//             {currentQuiz.options.map((option, index) => {
//               return (
//                 <div key={option}>
//                   <button
//                     disabled={selected}
//                     onClick={() => handleQuizOptions(index)}
//                   >
//                     {option}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div>
//         {activeInd === 9 ? (
//           <Link to="/score" state={{ score, total: quizQuestions.length }}>
//             Submit
//           </Link>
//         ) : (
//           <button disabled={activeInd === 9} onClick={handleNextQuestion}>
//             Next
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Quiz;

import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import quizQuestions from "../data/quizData";

const Quiz = () => {
  const [activeInd, setActiveInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(false);
  const [timer, setTimer] = useState(600);

  const currentQuiz = quizQuestions[activeInd] ?? null;

  useEffect(() => {
    if (timer < 0) return;
    const timeout = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeout);
  });

  function handleNextQuestion() {
    setSelected(false);
    setActiveInd((prev) => prev + 1);
  }

  function handleQuizOptions(index) {
    if (!currentQuiz) return;
    if (currentQuiz.correctAnswer === index) {
      setScore((prev) => prev + 1);
    }
    setSelected(true);
  }

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <section
      className="relative w-full max-w-3xl mx-auto p-10 rounded-3xl
      bg-gradient-to-br from-white/20 to-white/5
      backdrop-blur-2xl
      border border-white/30
      shadow-2xl text-white"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl 
        bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 
        blur-2xl -z-10"
      />

      {/* Top Bar */}
      {/* <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 text-white/80">
          <Clock size={18} />
          <span className="font-mono tracking-wider">
            {minutes}:{seconds}
          </span>
        </div>
      </div> */}
      <div className="flex items-center justify-between mb-8">
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-xl
    bg-black/40 backdrop-blur-md
    border border-white/20
    text-white shadow-lg"
        >
          <Clock size={16} className="text-white/80" />
          <span className="font-mono text-sm tracking-wider">
            {minutes}:{seconds}
          </span>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm text-white/60 mb-2">
        Question {activeInd + 1} of {quizQuestions.length}
      </p>

      <h2 className="text-xl font-medium mb-8 leading-relaxed">
        {currentQuiz?.question}
      </h2>

      {/* Options */}
      <div className="grid gap-4 mb-10">
        {currentQuiz?.options.map((option, index) => (
          <button
            key={option}
            disabled={selected}
            onClick={() => handleQuizOptions(index)}
            className={`w-full text-left px-5 py-3 rounded-xl
              border border-white/20
              bg-white/10 backdrop-blur
              hover:bg-white/20
              transition-all duration-300
              disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex justify-end">
        {activeInd === quizQuestions.length - 1 ? (
          <Link
            to="/score"
            state={{ score, total: quizQuestions.length }}
            className="px-8 py-3 rounded-xl
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-sm font-semibold tracking-wide
              hover:opacity-90
              transition-all duration-300
              shadow-lg shadow-purple-500/30"
          >
            Submit →
          </Link>
        ) : (
          <button
            disabled={!selected}
            onClick={handleNextQuestion}
            className="px-8 py-3 rounded-xl
              bg-white/20 hover:bg-white/30
              border border-white/30
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        )}
      </div>
    </section>
  );
};

export default Quiz;
