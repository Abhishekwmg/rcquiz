import { useLocation, Link } from "react-router-dom";

const Score = () => {
  const { state } = useLocation();
  const { score, total } = state;

  return (
    <div>
      <h1>{`Final Score: ${score}/${total}`}</h1>
      <p>Duration Time</p>
      <p>Maybe show a round circular thing for the score</p>
      <p>
        Show an image upon completion of the test, depending upon the pass and
        failed status show two different images
      </p>
      <p>Some quote or motivational quote depending upon the quiz score</p>
      <Link to="/quiz">Retake</Link>
      <Link to="/">Finish</Link>
    </div>
  );
};

export default Score;
