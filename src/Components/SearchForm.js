import React from "react";
import useGlobalContext from "../Context";
import "./Components.css";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();

	const searchValue = React.useRef("");
	const handleSubmit = (e) => e.preventDefault();
	const handleChange = () => setSearchTerm(searchValue.current.value);

	return (
		<section className="section search-section">
			<form action="" className="search-form" onSubmit={handleSubmit}>
				<div className="form-container">
					<label htmlFor="search">Search your favorite cocktails: </label>
					<input
						type="text"
						name="search"
						id="search"
						className="input"
						ref={searchValue}
						onChange={handleChange}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
