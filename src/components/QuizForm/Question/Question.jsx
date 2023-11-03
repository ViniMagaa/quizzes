import Option from "./Option/Option";

import "./Question.css"

function Question({ index, question, correctAnswer, incorrectAnswers }) {
	const answers = [correctAnswer, ...incorrectAnswers];

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
					/>
				))}
			</div>
		</div>
	);
}

export default Question;
