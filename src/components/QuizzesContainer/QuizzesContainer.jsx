import QuizContainer from "./QuizContainer/QuizContainer";

import "./QuizzesContainer.css";

function QuizzesContainer() {
	return (
		<div className="quizzes-container">
			<a href="/quiz" style={{ textDecoration: "none" }}>
				<QuizContainer />
			</a>
		</div>
	);
}

export default QuizzesContainer;
