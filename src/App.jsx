import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import MainScreen from "./component/Main";
import Quiz from "./component/Quiz";
import FinalScore from "./pages/FInalScore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "score",
        element: <FinalScore />,
      },
    ],
  },
]);

// const App = () => {
//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#FAFAF8]
//         flex items-center justify-center
//         p-6
//       "
//     >
//       <div className="w-full max-w-4xl mx-auto">
//         <RouterProvider router={router} />
//       </div>
//     </div>
//   );
// };

import bgtwo from "./assets/bgone.jpg";

const App = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Background image */}
      <img
        src={bgtwo}
        alt="heroimage"
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FAFAF8]/80 -z-10" />

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
