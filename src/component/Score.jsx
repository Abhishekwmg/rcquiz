// import { useLocation, Link } from "react-router-dom";

// const Score = () => {
//   const { state } = useLocation();
//   const { score, total } = state;

//   return (
//     <div>
//       <h1>{`Final Score: ${score}/${total}`}</h1>
//       <p>Duration Time</p>
//       <p>Maybe show a round circular thing for the score</p>
//       <p>
//         Show an image upon completion of the test, depending upon the pass and
//         failed status show two different images
//       </p>
//       <p>Some quote or motivational quote depending upon the quiz score</p>
//       <Link to="/quiz">Retake</Link>
//       <Link to="/">Finish</Link>
//     </div>
//   );
// };

// export default Score;

import { useLocation, Link } from "react-router-dom";
import success from "../assets/success.png";
import failed from "../assets/failed.png";
const Score = () => {
  const { state } = useLocation();
  const { score, total } = state || {};

  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;

  return (
    <section
      className="relative w-full max-w-xl mx-auto p-10 rounded-3xl
      bg-gradient-to-br from-white/20 to-white/5
      backdrop-blur-2xl
      border border-white/30
      shadow-2xl text-[#0c0a09] text-center"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl 
        bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 
        blur-2xl -z-10"
      />

      {/* Heading */}
      <h1
        className="text-3xl font-semibold mb-6
        bg-gradient-to-r from-white via-white/80 to-white/60
        bg-clip-text text-[#0c0a09]"
      >
        Quiz Completed 🎉
      </h1>

      {/* Circular Score */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <div
          className="absolute inset-0 rounded-full
          bg-gradient-to-tr from-indigo-500 to-purple-500
          flex items-center justify-center
          shadow-lg shadow-purple-500/40"
        >
          <span className="text-4xl font-bold">
            {score}/{total}
          </span>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src={passed ? success : failed}
          alt="result"
          className="w-16 h-16 object-contain opacity-90"
        />
      </div>

      <p className="text-[#0c0a09] italic mb-8">
        {passed
          ? "Great job! Consistency beats talent when talent doesn’t practice."
          : "Failure is simply the opportunity to begin again, this time more intelligently."}
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/quiz"
          className="px-6 py-3 rounded-xl
            bg-white/20 hover:bg-white/30
            border border-white/30
            transition-all duration-300"
        >
          Retake
        </Link>

        <Link
          to="/"
          className="px-6 py-3 rounded-xl
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            font-medium
            hover:opacity-90
            transition-all duration-300 text-white
            shadow-lg shadow-purple-500/30"
        >
          Finish
        </Link>
      </div>
    </section>
  );
};

export default Score;
