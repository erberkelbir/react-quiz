function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);
  let emoji;
  if (percentage > 80) {
    emoji = "🤩";
  } else if (percentage > 60) {
    emoji = "😊";
  } else if (percentage > 40) {
    emoji = "😐";
  } else if (percentage > 20) {
    emoji = "😕";
  } else if (percentage > 0) {
    emoji = "😩";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore is : {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
