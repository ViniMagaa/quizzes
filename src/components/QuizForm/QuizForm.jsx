import Question from "./Question/Question";
import Button from "../Button/Button";

import "./QuizForm.css"

function QuizForm({ data }) {
	const questions = data;

	return (
		<form onSubmit={(e) => e.preventDefault()} className="container">
			<h1>Quiz 1</h1>
			<div className="container">
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
			<Button type="submit" value="Submit Quiz" />
		</form>
	);
}

export default QuizForm;
