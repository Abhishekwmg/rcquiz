import MainScreen from "./component/Main";
import Score from "./component/Score";
import Quiz from "./component/Quiz";
const App = () => {
  return (
    <section className="min-h-screen bg-[url('../assets/bgone.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <Quiz />
    </section>
  );
};

export default App;
