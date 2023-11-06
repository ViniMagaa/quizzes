import QuizContainer from "./QuizContainer/QuizContainer";
import Button from "../Button/Button";

import "./QuizzesContainer.css";

function QuizzesContainer({quizzes, handleClick}) {
	return (
		<div className="quizzes-container">
			{quizzes.map((quiz, index) => (
				<div key={`container-${index}`}>
					<QuizContainer key={index} index={index} quizData={quiz} />
					<Button
						key={`button-${index}`}
						value="Open"
						handleClick={() => handleClick(index)}
					/>
				</div>
			))}
		</div>
	);
}

export default QuizzesContainer;
