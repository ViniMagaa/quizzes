import { useEffect, useState } from "react";
import Header from "./layouts/Header/Header";
import Quiz from "./Quiz/Quiz";

function App() {
	const [quizData, setQuizData] = useState({});

	useEffect(() => {
		try {
			// fetch("https://opentdb.com/api.php?amount=5&type=multiple")
			fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
				.then((resp) => resp.json())
				.then((data) => setQuizData(data));
		} catch (error) {
			console.log(error);
		}
	}, []);

	console.log(quizData);

	// ----------

	const quiz = quizData.results || [];

	return (
		<>
			<Header />

			<main>
				{
					<Quiz data={quiz} />
				}
			</main>
		</>
	);
}

export default App;
