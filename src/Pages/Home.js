import React from "react";
import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";

import "./Pages.css";

const Home = () => {
	return (
		<div className="section section-home">
			<SearchForm />
			<CocktailList />
		</div>
	);
};

export default Home;
