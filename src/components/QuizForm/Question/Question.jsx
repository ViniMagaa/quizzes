import { useEffect, useState } from "react";
import Option from "./Option/Option";

import "./Question.css";

function Question({ index, question, correctAnswer, incorrectAnswers, handleClick }) {
	const [answers, setAnswers] = useState([]);

	function shuffleArray(array) {
		const newArray = [...array]; // Create a copy
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Replace
		}
		return newArray;
	}

	useEffect(() => {
		setAnswers(shuffleArray([correctAnswer, ...incorrectAnswers]));
	}, [setAnswers, correctAnswer, incorrectAnswers])

	return (
		<div className="container">
			<h2>Question {index + 1}:</h2>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div className="options-container">
				{answers.map((answer, answerIndex) => (
					<Option
						key={answerIndex}
						index={index}
						answerIndex={answerIndex}
						answer={answer}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
}

export default Question;
