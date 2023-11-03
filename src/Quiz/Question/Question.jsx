import Option from "./Option/Option";

function Question({ index, question, correctAnswer, incorrectAnswers }) {
	const answers = [correctAnswer, ...incorrectAnswers];

	return (
		<div>
			<h2>Question {index + 1}:</h2>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			{answers.map((answer, answerIndex) => (
				<Option
					key={answerIndex}
					index={index}
					answerIndex={answerIndex}
					answer={answer}
				/>
			))}
		</div>
	);
}

export default Question;
