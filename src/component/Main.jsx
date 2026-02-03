// import quizInstructions from "../data/quizRules";
// import { Link } from "react-router-dom";

// const MainScreen = () => {
//   return (
//     <div>
//       <h1>Please read the instructions carefully before proceeding.</h1>
//       {quizInstructions &&
//         quizInstructions.length &&
//         quizInstructions.map((rules) => {
//           return (
//             <ol key={rules.id}>
//               <li>{rules.rule}</li>
//             </ol>
//           );
//         })}
//       <Link to="quiz">Star</Link>
//     </div>
//   );
// };

// export default MainScreen;

// import quizInstructions from "../data/quizRules";
// import { Link } from "react-router-dom";

// const MainScreen = () => {
//   return (
//     <div
//       className="w-full max-w-2xl mx-auto p-8 rounded-2xl
//       bg-white/10 backdrop-blur-xl
//       border border-white/20
//       shadow-xl text-white"
//     >
//       {/* Heading */}
//       <h1 className="text-2xl font-medium tracking-wide mb-6 text-white/90">
//         Please read the instructions carefully before proceeding
//       </h1>

//       {/* Rules */}
//       <ol className="space-y-3 mb-8 list-decimal list-inside text-white/80">
//         {quizInstructions?.map((rules) => (
//           <li key={rules.id} className="leading-relaxed">
//             {rules.rule}
//           </li>
//         ))}
//       </ol>

//       {/* Start Button */}
//       <Link
//         to="quiz"
//         className="inline-flex items-center justify-center
//           px-6 py-2 rounded-lg
//           bg-white/20 hover:bg-white/30
//           transition-all duration-300
//           text-sm font-medium tracking-wide
//           border border-white/30"
//       >
//         Start Quiz
//       </Link>
//     </div>
//   );
// };

// export default MainScreen;

import quizInstructions from "../data/quizRules";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto p-10 rounded-3xl
      bg-gradient-to-br from-white/20 to-white/5
      backdrop-blur-2xl
      border border-white/30
      shadow-2xl
      text-white
      transition-transform duration-300 hover:scale-[1.01]"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-3xl 
        bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 
        blur-2xl -z-10"
      />

      {/* Heading */}
      <h1
        className="text-3xl font-semibold tracking-tight mb-6
        bg-gradient-to-r from-white via-white/80 to-white/60
        bg-clip-text text-transparent"
      >
        Quiz Instructions
      </h1>

      <p className="text-white/70 mb-8 text-sm">
        Read carefully before starting. This test is time-bound.
      </p>

      {/* Rules */}
      <ol className="space-y-4 mb-10 list-decimal list-inside">
        {quizInstructions?.map((rules) => (
          <li
            key={rules.id}
            className="group text-white/85 leading-relaxed
              transition-all duration-300
              hover:text-white"
          >
            <span className="group-hover:ml-1 transition-all duration-300">
              {rules.rule}
            </span>
          </li>
        ))}
      </ol>

      {/* Start Button */}
      <Link
        to="quiz"
        className="inline-flex items-center justify-center
          px-8 py-3 rounded-xl
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          hover:opacity-90
          transition-all duration-300
          text-sm font-semibold tracking-wide
          shadow-lg shadow-purple-500/30"
      >
        Start Quiz →
      </Link>
    </div>
  );
};

export default MainScreen;
