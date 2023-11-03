import QuizzesContainer from "../../components/QuizzesContainer/QuizzesContainer";

import "./Home.css";

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
			<h2>Our quizzes:</h2>
			<QuizzesContainer />
		</div>
	);
}

export default Home;