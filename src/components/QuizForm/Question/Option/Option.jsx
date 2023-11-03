function Option({index, answerIndex, answer}) {
  return (
		<div key={answerIndex}>
			<input
				type="radio"
				name={`answer-${index}`}
				id={`answer-${index}-for-${answerIndex}`}
			/>
			<label
				htmlFor={`answer-${index}-for-${answerIndex}`}
				dangerouslySetInnerHTML={{ __html: answer }}
			/>
		</div>
	);
}

export default Option;