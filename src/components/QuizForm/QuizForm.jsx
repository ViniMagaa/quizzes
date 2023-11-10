import { useState } from "react";

import Question from "./Question/Question";
import Button from "../Button/Button";

import "./QuizForm.css";

function QuizForm({ questions, onQuizSubmit }) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const correctAnswers = questions.map((question) => {
		return question.correct_answer;
	});

	// Method called when the user click on a option
	function handleSelectAnswer(answer) {
		setUserAnswers((prev) => {
			const updatedUserAnswers = [...prev]; // Creating a copy
			updatedUserAnswers[currentQuestionIndex] = answer;
			return updatedUserAnswers;
		});
	}

	// To update the question index
	function handleNextQuestion() {
		// Check if the user clicked on a option
		if (userAnswers[currentQuestionIndex] === undefined) {
			alert("First answer this question!");
			return;
		}
		setCurrentQuestionIndex((crrQuest) => crrQuest + 1);
	}

	// When the test is finished
	function handleSubmit() {
		// Check if the user clicked on a option
		if (userAnswers[currentQuestionIndex] === undefined) {
			alert("First answer this question!");
			return;
		}

		// Check how much questions the user got right
		let numberCorrectAnswers = 0;
		const numberQuestions = questions.length;
		userAnswers.forEach((answer, index) => {
			if (answer === correctAnswers[index]) {
				numberCorrectAnswers++;
			}
		});

		const quizData = {
			numberCorrectAnswers,
			numberQuestions
		};

		onQuizSubmit(quizData);
	}

	return (
		<form onSubmit={(e) => e.preventDefault()} className="container">
			<h1>Quiz</h1>
			<div className="container">
				{currentQuestionIndex < questions.length && (
					<Question
						key={currentQuestionIndex}
						index={currentQuestionIndex}
						question={questions[currentQuestionIndex].question}
						correctAnswer={questions[currentQuestionIndex].correct_answer}
						incorrectAnswers={questions[currentQuestionIndex].incorrect_answers}
						handleClick={handleSelectAnswer}
					/>
				)}
			</div>
			{currentQuestionIndex < questions.length - 1 ? (
				<Button type="button" value="Next" handleClick={handleNextQuestion} />
			) : (
				<Button type="submit" value="Submit" handleClick={handleSubmit} />
			)}
		</form>
	);
}

export default QuizForm;
