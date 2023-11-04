import QuizContainer from "./QuizContainer/QuizContainer";

import "./QuizzesContainer.css";

function QuizzesContainer({quizzes, handleClick}) {
	return (
		<div className="quizzes-container">
			{quizzes.map((quiz, index) => (
				<QuizContainer key={index} index={index} quizData={quiz} handleClick={handleClick} />
			))}
		</div>
	);
}

export default QuizzesContainer;
