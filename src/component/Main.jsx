import quizInstructions from "../data/quizRules";

const MainScreen = () => {
  function handleQuizStart() {
    console.log("quiz started");
  }
  return (
    <div>
      <h1>Please read the instructions carefully before proceeding.</h1>
      {quizInstructions &&
        quizInstructions.length &&
        quizInstructions.map((rules) => {
          return (
            <ol key={rules.id}>
              <li>{rules.rule}</li>
            </ol>
          );
        })}
      <button onClick={handleQuizStart}>Start</button>
    </div>
  );
};

export default MainScreen;
