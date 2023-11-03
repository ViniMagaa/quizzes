import { useState } from "react";

import Question from "./Question/Question";
import Button from "../Button/Button";

import "./QuizForm.css";

function QuizForm({ data }) {
	const questions = data;
	const [currentQuestion, setCurrentQuestion] = useState(0);

	function handleLastQuestion() {
		setCurrentQuestion((crrQuest) => crrQuest - 1);
	}

	function handleNextQuestion() {
		setCurrentQuestion((crrQuest) => crrQuest + 1);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="container">
			<h1>Quiz 1</h1>
			<div className="container">
				{currentQuestion < questions.length && (
					<Question
						key={currentQuestion}
						index={currentQuestion}
						question={questions[currentQuestion].question}
						correctAnswer={questions[currentQuestion].correct_answer}
						incorrectAnswers={questions[currentQuestion].incorrect_answers}
					/>
				)}
			</div>
			<div className="change-questions">
				{currentQuestion > 0 && (
					<Button value="Previous" handleClick={handleLastQuestion} />
				)}
				{currentQuestion < questions.length - 1 ? (
					<Button value="Next" handleClick={handleNextQuestion} />
				) : (
					<Button type="submit" value="Submit" />
				)}
			</div>
		</form>
	);
}

export default QuizForm;
