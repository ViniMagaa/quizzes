function Option({index, answerIndex, answer, handleClick}) {
  return (
		<label key={answerIndex} onClick={() => handleClick(answer)} htmlFor={`answer-${index}-for-${answerIndex}`}>
			<input
				type="radio"
				name={`answer-${index}`}
				id={`answer-${index}-for-${answerIndex}`}
			/>
			<label
				htmlFor={`answer-${index}-for-${answerIndex}`}
				dangerouslySetInnerHTML={{ __html: answer }}
			/>
		</label>
	);
}

export default Option;