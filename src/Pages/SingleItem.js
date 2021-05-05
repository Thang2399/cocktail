import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import useGlobalContext from "../Context";
import Loading from "../Components/Loading";
import "../Components/Components.css";

const myStyle = { margin: "1rem auto" };

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleItem = () => {
	const { id } = useParams();
	const { loading, setLoading } = useGlobalContext();
	const [item, setItem] = React.useState(null);
	useEffect(() => {
		const fetchDrink = async () => {
			setLoading(true);

			try {
				const res = await fetch(`${url}${id} `);
				const data = await res.json();
				console.log(data);

				console.log(data.drinks[0]);
				if (data.drinks) {
					const {
						strDrink: name,
						strAlcoholic: info,
						strDrinkThumb: img,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					const newItem = {
						name,
						info,
						img,
						glass,
						instructions,
						ingredients,
					};
					setItem(newItem);
					setLoading(false);
				} else setItem(null);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchDrink();
	}, [id, setLoading]);

	if (loading) return <Loading />;
	if (!item) return <h2 className="section-title">Nothing to show!</h2>;
	else
		return (
			<div className="section cocktail-section">
				<Link to="/">
					<button className="btn primary-btn">Back home</button>
				</Link>
				<h2 className="section-title">{item.name}</h2>
				<article className="single-cocktail cocktail">
					<img src={item.img} alt={item.name} className="cocktail-img" />
					<div className="text-container">
						<h3 style={myStyle}>Name: {item.name}</h3>
						<h5 style={myStyle}>
							Type: <span style={{ fontWeight: "300" }}> {item.info}</span>
						</h5>
						<h5 style={myStyle}>
							Glass:
							<span style={{ fontWeight: "300" }}> {item.glass}</span>
						</h5>
						<h6 style={myStyle}>
							Ingredients: {""}
							<span style={{ fontWeight: "300" }}>
								{item.ingredients.map((item, index) => {
									return item ? (
										<span key={index} style={{ marginRight: "0.5rem" }}>
											{item}
										</span>
									) : null;
								})}
							</span>
						</h6>

						<h6 style={myStyle}>
							Instructions:
							<span style={{ fontWeight: "300" }}> {item.instructions}</span>
						</h6>
					</div>
				</article>
			</div>
		);
};

export default SingleItem;
