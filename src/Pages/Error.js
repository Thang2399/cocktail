import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="section section-error">
			<h1 className="section-title">Dead Page! Sorry :((</h1>
			<Link to="/"><button className="btn primary-btn">Back Home</button></Link>
		</div>
	);
};

export default Error;
