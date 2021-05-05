import React from "react";

import CocktailItem from "./CocktailItem";
import Loading from "./Loading";
import useGlobalContext from "../Context";

import "../Pages/Pages.css";
const CocktailList = () => {
	const { loading, cocktailsList } = useGlobalContext();
	console.log(cocktailsList);
	if (loading) return <Loading />;
	if (cocktailsList.length < 1)
		return <h2 className="section-title">No cocktail match your search!</h2>;
	else
		return (
			<div className="section">
				<h2 className="section-title">Our cocktails:</h2>.
				<div className="cocktails-list-section">
					{cocktailsList.map((cocktail) => {
						return <CocktailItem key={cocktail.id} {...cocktail} />;
					})}
				</div>
			</div>
		);
};

export default CocktailList;
