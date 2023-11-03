import { BiSearchAlt2 } from "react-icons/bi";

import "./Header.css"

function Header() {
	return (
		<header>
			<nav>
				<div className="links">
					<a href="#">Home</a>
					<a href="#">Dashboard</a>
				</div>
				<div className="search">
					<input
						type="search"
						name="search-quiz"
						id="search-quiz"
						placeholder="Search quiz"
					/>
					<button>
            <BiSearchAlt2 />
          </button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
