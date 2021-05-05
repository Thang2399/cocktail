import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

//Component
import Navbar from "./Components/Navbar";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SingleCocktail from "./Pages/SingleItem";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/cocktail/:id">
						<SingleCocktail />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
