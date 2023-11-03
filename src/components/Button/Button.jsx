import "./Button.css";

function Button({ type = "", value, handleClick = () => {} }) {
	return (
		<button type={type} onClick={handleClick} className="btn">
			{value}
		</button>
	);
}

export default Button;
