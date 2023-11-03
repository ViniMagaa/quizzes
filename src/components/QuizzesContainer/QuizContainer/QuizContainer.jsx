import "./QuizContainer.css";

function QuizContainer() {
	return (
		<div className="quiz-container">
			<h2>Quiz 1</h2>
			<p>
				Quiz description Lorem ipsum dolor sit amet consectetur adipisicing
				elit.
			</p>
			<ul className="quiz-data">
				<li>
					Category: <span>General Knowledge</span>
				</li>
				<li>
					Difficulty: <span>Easy</span>
				</li>
				<li>
					Max-score: <span>Not played</span>
				</li>
			</ul>
		</div>
	);
}

export default QuizContainer;
