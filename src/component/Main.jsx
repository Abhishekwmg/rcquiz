// import quizInstructions from "../data/quizRules";
// import { Link } from "react-router-dom";

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
          bg-clip-text text-[#0c0a09]"
      >
        Quiz Instructions
      </h1>

      <p className="text-[#0c0a09] mb-8 text-sm">
        Read carefully before starting. This test is time-bound.
      </p>

      {/* Rules */}
      <ol className="space-y-4 mb-10 list-decimal list-inside">
        {quizInstructions?.map((rules) => (
          <li
            key={rules.id}
            className="group text-[#0c0a09] leading-relaxed
                transition-all duration-300
                hover:text-[#0c0a09]"
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

// export default MainScreen;

import quizInstructions from "../data/quizRules";
import { Link } from "react-router-dom";

// const MainScreen = () => {
//   return (
//     <div
//       className="
//         w-full max-w-2xl mx-auto p-10 rounded-3xl
//         bg-[#FFFEFC]
//         border border-[#E5E7EB]
//         ring-1 ring-black/5
//         shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]
//         text-[#1F2933]
//       "
//     >
//       {/* Heading */}
//       <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-[#1F2933]">
//         Quiz Instructions
//       </h1>

//       <p className="text-[#6B7280] mb-8 text-sm sm:text-base leading-relaxed">
//         Read carefully before starting. This test is time-bound.
//       </p>

//       {/* Rules */}
//       <ol className="space-y-3 pl-1 mb-10 list-decimal list-inside">
//         {quizInstructions?.map((rules) => (
//           <li
//             key={rules.id}
//             className="
//               text-[#374151] leading-relaxed
//               transition-colors
//               hover:text-[#1F2933]
//             "
//           >
//             {rules.rule}
//           </li>
//         ))}
//       </ol>

//       {/* Start Button */}
//       <Link
//         to="quiz"
//         className="
//           inline-flex items-center justify-center
//           px-8 py-3 rounded-xl
//           bg-[#C26D3A]
//           hover:bg-[#B85F2E]
//           transition-all
//           text-white
//           text-sm font-semibold
//           shadow-sm hover:shadow-md
//           active:scale-[0.98]
//         "
//       >
//         Start Quiz →
//       </Link>
//     </div>
//   );
// };

export default MainScreen;
