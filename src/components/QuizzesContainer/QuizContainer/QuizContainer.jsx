import "./QuizContainer.css";

function QuizContainer({ redirect }) {
	return (
		<a href={redirect} style={{ textDecoration: "none" }}>
			<div className="quiz-container">
				<h2>Quiz 1</h2>
				<p>
					Quiz description Lorem ipsum dolor sit amet consectetur adipisicing
					elit.
				</p>
				<ul className="quiz-data">
					<li>
						Category: <span>General Knowlege</span>
					</li>
					<li>
						Difficulty: <span>Easy</span>
					</li>
					<li>
						Max-score: <span>9/10</span>
					</li>
				</ul>
			</div>
		</a>
	);
}

export default QuizContainer;
