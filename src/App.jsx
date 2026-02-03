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
const App = () => {
  return (
    <section className="min-h-screen bg-[url('../assets/bgone.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <RouterProvider router={router} />
    </section>
  );
};

export default App;
