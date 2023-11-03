import { Link } from "react-router-dom";

import "./Home.css"

function Home() {
  return (
		<div className="home-container">
			<h1>Welcome to Quizzes!</h1>
			<p>
				This is where <span>knowledge meets entertainment</span>. Dive into a collection of meticulously crafted quizzes designed to <span>challenge your mind</span> and captivate your curiosity.
			</p>
			<p>
				Are you ready to put your knowledge to the test? <strong>Select a quiz below</strong> and
				embark on an <em>intellectual adventure</em>.
			</p>
			<div className="quizzes-container">
				<Link to="/quiz-1">Quiz 1</Link>
			</div>
		</div>
	);
}

export default Home;