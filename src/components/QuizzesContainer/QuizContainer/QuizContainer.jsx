import "./QuizContainer.css";

function QuizContainer({ index, quizData, handleClick = () => {} }) {
	return (
		<>
			{quizData && (
				<div className="quiz-container" onClick={() => handleClick(index)}>
					<h2>{quizData.title}</h2>
					<p>{quizData.description}</p>
					<ul className="quiz-data">
						<li>
							Category: <span>{quizData.category}</span>
						</li>
						<li>
							Difficulty: <span>{quizData.difficulty}</span>
						</li>
						<li>
							Number of questions: <span>{quizData.questionsNumber}</span>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default QuizContainer;
