import React, { useState, useEffect, useContext, useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("a");
	const [cocktailsList, setCocktailsList] = useState([]);

	const fetchDrinks = useCallback(async () => {
		setLoading(true);

		try {
			const res = await fetch(`${url}${searchTerm}`);
			const data = await res.json();

			const { drinks } = data;
			if (drinks) {
				const newDrinks = drinks.map((drink) => {
					const {
						idDrink,
						strAlcoholic,
						strDrink,
						strGlass,
						strDrinkThumb,
					} = drink;
					return {
						id: idDrink,
						name: strDrink,
						glass: strGlass,
						img: strDrinkThumb,
						info: strAlcoholic,
					};
				});
				setCocktailsList(newDrinks);
			} else setCocktailsList([]);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks]);

	return (
		<AppContext.Provider
			value={{ loading, cocktailsList, setSearchTerm, setLoading }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
export { AppContext, AppProvider };
