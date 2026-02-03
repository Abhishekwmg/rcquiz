import quizInstructions from "../data/quizRules";
import { Link } from "react-router-dom";

const MainScreen = () => {
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
      <Link to="quiz">Star</Link>
    </div>
  );
};

export default MainScreen;
