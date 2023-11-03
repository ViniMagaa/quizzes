import { BiSearchAlt2 } from "react-icons/bi";

function Header() {
	return (
		<header>
			<nav>
				<div>
					<input
						type="search"
						name="search-quiz"
						id="search-quiz"
						placeholder="Search for quiz"
					/>
					<button>
            <BiSearchAlt2 />
          </button>
				</div>
				<div>
					<a href="#">Home</a>
					<a href="#">Dashboard</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
