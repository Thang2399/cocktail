import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";
let logoUrl =
	"https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<Link to="/">
					<img src={logoUrl} alt="logo" className="logo" />
				</Link>

				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
