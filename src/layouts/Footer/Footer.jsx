import githubImg from "./icon-github.png";
import instagramImg from "./icon-instagram.png";
import twitterImg from "./icon-twitter.png";

import "./Footer.css"

function Footer() {
	return (
		<footer>
			<div className="footer-container container">
				<div className="link-icons">
					<a href="https://github.com/vinimagaa" target="_blank" rel="noreferrer">
            <img src={githubImg} alt="Github" />
					</a>
					<a href="https://instagram.com/vini.magaa" target="_blank" rel="noreferrer">
            <img src={instagramImg} alt="Instagram" />            
					</a>
					<a href="https://twitter.com/vini_magaa" target="_blank" rel="noreferrer">
            <img src={twitterImg} alt="Twitter" />            
					</a>
				</div>
        <div className="copyright container">
          <p>Website made in React</p>
          <span className="copy">&copy; 2023 Vinícius</span>
        </div>
			</div>
		</footer>
	);
}

export default Footer;
