import QuizContainer from "../QuizzesContainer/QuizContainer/QuizContainer";

function QuizResults({ information, quizData }) {

  // Formatting time
	const timeInMinutes = Math.floor(Number(information.quizTime) / 60);
	const timeInSeconds = Math.floor(Number(information.quizTime) % 60);
  const formattedTime = timeInMinutes.toString().padStart(2, "0") + ":" + timeInSeconds.toString().padStart(2, "0")

	return (
		<div className="container">
			{<QuizContainer quizData={quizData} />}
			<h1>
				You scored {information.numberCorrectAnswers}/
				{information.numberQuestions}
			</h1>
			<p>Your time: {formattedTime}</p>
		</div>
	);
}

export default QuizResults;
