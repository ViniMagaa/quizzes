import Option from "./Option/Option";

import "./Question.css";

function shuffleArray(array) {
	const newArray = [...array]; // Crie uma cópia da array original para evitar modificar a array original.
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Troque os elementos.
	}
	return newArray; // Retorne a array embaralhada.
}

function Question({ index, question, correctAnswer, incorrectAnswers }) {
	const answers = [correctAnswer, ...incorrectAnswers];
	const shuffledAnswers = shuffleArray(answers);

	return (
		<div className="container">
			<h2>Question {index + 1}:</h2>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div className="options-container">
				{shuffledAnswers.map((answer, answerIndex) => (
					<Option
						key={answerIndex}
						index={index}
						answerIndex={answerIndex}
						answer={answer}
					/>
				))}
			</div>
		</div>
	);
}

export default Question;
