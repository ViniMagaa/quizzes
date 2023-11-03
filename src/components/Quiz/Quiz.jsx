import Question from "./Question/Question";

import "./Quiz.css"

function Quiz({ data }) {
	const questions = data;

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<h1>Quiz 1</h1>
			<div className="questions-container">
				{questions.map((question, index) => (
					<Question
						key={index}
						index={index}
						question={question.question}
						correctAnswer={question.correct_answer}
						incorrectAnswers={question.incorrect_answers}
					/>
				))}
			</div>
			<button type="submit">Submit quiz</button>
		</form>
	);
}

export default Quiz;
