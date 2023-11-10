import { useState, useEffect } from "react";

import QuizContainer from "../QuizzesContainer/QuizContainer/QuizContainer";
import QuizForm from "../QuizForm/QuizForm";
import Button from "../Button/Button";

import "./QuizManager.css";
import QuizResults from "../QuizResults/QuizResults";

function QuizManager({ url, quizContainerData }) {
  const [quizData, setQuizData] = useState({});
  const [isQuizFormVisible, setIsQuizFormVisible] = useState(false);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [quizStatistics, setQuizStatistics] = useState({});
  const [quizTime, setQuizTime] = useState(0);

  useEffect(() => {
    try {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setQuizData(data));
    } catch (error) {
      console.log(error);
    }
    // setQuizData({
    // 	response_code: 0,
    // 	results: [
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    // 			correct_answer: "Subscriber",
    // 			incorrect_answers: ["Single", "Secure", "Solid"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question: "What is the nickname of the US state of California?",
    // 			correct_answer: "Golden State",
    // 			incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question: "What do the letters in the GMT time zone stand for?",
    // 			correct_answer: "Greenwich Mean Time",
    // 			incorrect_answers: [
    // 				"Global Meridian Time",
    // 				"General Median Time",
    // 				"Glasgow Man Time",
    // 			],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question: "What is the name of Poland in Polish?",
    // 			correct_answer: "Polska",
    // 			incorrect_answers: ["Pupcia", "Polszka", "P&oacute;land"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"Which of the following card games revolves around numbers and basic math?",
    // 			correct_answer: "Uno",
    // 			incorrect_answers: ["Go Fish", "Twister", "Munchkin"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    // 			correct_answer: "Plum",
    // 			incorrect_answers: ["Apple", "Peach", "Pear"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"Terry Gilliam was an animator that worked with which British comedy group?",
    // 			correct_answer: "Monty Python",
    // 			incorrect_answers: [
    // 				"The Goodies&lrm;",
    // 				"The League of Gentlemen&lrm;",
    // 				"The Penny Dreadfuls",
    // 			],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question: "What is the French word for &quot;fish&quot;?",
    // 			correct_answer: "poisson",
    // 			incorrect_answers: ["fiche", "escargot", "mer"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
    // 			correct_answer: "Swiss Air",
    // 			incorrect_answers: ["Air France", "British Airways", "TWA"],
    // 		},
    // 		{
    // 			category: "General Knowledge",
    // 			type: "multiple",
    // 			difficulty: "easy",
    // 			question:
    // 				"The &ldquo;fairy&rdquo; type made it&rsquo;s debut in which generation of the Pokemon core series games?",
    // 			correct_answer: "6th",
    // 			incorrect_answers: ["2nd", "7th", "4th"],
    // 		},
    // 	],
    // });
  }, [url]);

  // Inicialize the interval when component is mounted
  useEffect(() => {
    // Method to update the counter each second
    if (isQuizFormVisible) {
      const updateCounter = () => {
        setQuizTime((prev) => prev + 1);
      };

      const interval = setInterval(updateCounter, 1000);

      // Clear the interval when component is dismounted
      return () => {
        clearInterval(interval);
      };
    }
  }, [isQuizFormVisible, quizTime]);

  // Function to receive the quiz statistics and show/hide the components
  function handleQuizSubmit(data) {
    setIsQuizFormVisible(false);
    setQuizStatistics({ ...data, quizTime });
    setIsResultsVisible(true);
  }

  const quizQuestions = quizData.results || [];
  return (
    <div className="quiz-manager-container">
      {!isResultsVisible ? (
        !isQuizFormVisible ? (
          <>
            <h1>Are you ready?</h1>
            <QuizContainer quizData={quizContainerData} />
            <Button
              value="Start Quiz"
              handleClick={() => setIsQuizFormVisible(true)}
            />
          </>
        ) : (
          <QuizForm questions={quizQuestions} onQuizSubmit={handleQuizSubmit} />
        )
      ) : (
        <QuizResults
          information={quizStatistics}
          quizData={quizContainerData}
        />
      )}
    </div>
  );
}

export default QuizManager;
