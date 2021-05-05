import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";

const CocktailItem = ({ id, name, img, info, glass }) => {
	return (
		<article className="single-cocktail">
			<div className="img-container">
				<img src={img} alt={name} />
			</div>
			<div className="text-container">
				<h3>{name}</h3>
				<h5>{glass}</h5>
				<p>{info}</p>

				<Link to={`/cocktail/${id}`}>
					<button className="btn ">details</button>
				</Link>
			</div>
		</article>
	);
};

export default CocktailItem;
