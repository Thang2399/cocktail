import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const About = () => {
	return (
		<div className="section about-section">
			<h1 className="section-title">About us</h1>
			<p className="des">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				veniam laborum cumque accusantium vel nisi dicta eveniet aperiam
				laboriosam soluta sed molestiae veritatis adipisci, voluptates neque?
				Nulla nisi hic nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Provident deleniti vero aperiam obcaecati eligendi reiciendis
				incidunt, sed explicabo voluptatem fugit voluptatum reprehenderit harum
				itaque voluptates adipisci totam sunt amet accusantium!
			</p>
			<Link to="/">
				<button className="btn primary-btn">Back Home</button>
			</Link>
		</div>
	);
};

export default About;
