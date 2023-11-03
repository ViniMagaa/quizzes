import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header/Header";
import Home from "./layouts/Home/Home";
import QuizManager from "./components/QuizManager/QuizManager";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/quiz" element={<QuizManager />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
