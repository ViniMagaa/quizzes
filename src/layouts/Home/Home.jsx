import { useState } from "react";
import QuizzesContainer from "../../components/QuizzesContainer/QuizzesContainer";

import "./Home.css";
import QuizManager from "../../components/QuizManager/QuizManager";

function Home() {
	const [isQuizClicked, setIsQuizClicked] = useState(false);
	const [quiz, setQuiz] = useState([]);
	const quizzes = [
		{
			url: "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple",
			title: "Quiz 1",
			description: "This is a simple test",
			category: "General Knowledge",
			difficulty: "Easy",
			questionsNumber: 5,
		},
		{
			url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
			title: "Quiz 2",
			description: "This is a medium test",
			category: "General Knowledge",
			difficulty: "Medium",
			questionsNumber: 10,
		},
	];

	function handleClickOnQuiz(index) {
		setQuiz(quizzes[index]);
		setIsQuizClicked(true);
	}

	return (
		<main>
			{!isQuizClicked ? (
				<div className="home-container">
					<h1>Welcome to Quizzes!</h1>
					<p>
						This is where <span>knowledge meets entertainment</span>. Dive into a collection of meticulously crafted quizzes designed to <span>challenge your mind</span> and captivate your curiosity.
					</p>
					<p>
						Are you ready to put your knowledge to the test? <strong>Select a quiz below</strong> and embark on an <em>intellectual adventure</em>.
					</p>
					<h2>Our quizzes:</h2>
					<QuizzesContainer quizzes={quizzes} handleClick={handleClickOnQuiz} />
				</div>
			) : (
				<QuizManager url={quiz.url} quizContainerData={quiz} />
			)}
		</main>
	);
}

export default Home;
