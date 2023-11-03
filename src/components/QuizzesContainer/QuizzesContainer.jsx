import QuizContainer from "./QuizContainer/QuizContainer";

import "./QuizzesContainer.css"

function QuizzesContainer() {
	return (
		<div className="quizzes-container">
			<QuizContainer quizTitle="Quiz 1" redirect="/quiz-1" />
			<QuizContainer quizTitle="Quiz 2" redirect="/quiz-2" />
			<QuizContainer quizTitle="Quiz 3" redirect="/quiz-3" />
		</div>
	);
}

export default QuizzesContainer;
