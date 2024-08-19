import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext.js"
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchCharacters();
		actions.fetchPlanets();
	}, []);

	const handleCharacterClick = (uid) => {
		navigate(`/details/${uid}`);
	};
	const handlePlanetClick = (uid) => {
		navigate(`/planet-learnMore/${uid}`);
	};

	function NameIsFavorited(name) {

		return !!store.favorites.find((favorite) => (favorite.name === name))

		// if (favoriteOfName.type === "CHARACTER") {
		// 	if (favoriteOfName.length === 0) {
		// 		return (<CiHeart onClick={() => actions.toggleFavorite(character.uid,
		// 			"CHARACTER",
		// 			character.name
		// 		)} />)
		// 	}
		// 	if (favoriteOfName.legth === 1) {
		// 		return (<FaHeart onClick={() => actions.toggleFavorite(character.uid,
		// 			"CHARACTER",
		// 			character.name
		// 		)} />)
		// 	}
		// }
		// if (favoriteOfName.type === "PLANET") {
		// 	if (favoriteOfName.length === 0) {
		// 		return (<CiHeart onClick={() => actions.toggleFavorite(planet.uid,
		// 			"PLANET",
		// 			planet.name
		// 		)} />)
		// 	}
		// 	if (favoriteOfName.legth === 1) {
		// 		return (<FaHeart onClick={() => actions.toggleFavorite(planet.uid,
		// 			"PLANET",
		// 			planet.name
		// 		)} />)
		// 	}
		// }

	}

	return (
		<div className="flex-container">
			<h2>home page</h2>
			<h2>home page</h2>

			<div className="cardContainer">
				{store.characters.map((character) => (
					<div key={character.uid} className="characterCard">
						<div>
							<a></a>
							<div className="row">
								<h3>{character.name}</h3>
							</div>
							<div className="row buttonRow">
								<div className="col-2">
									{NameIsFavorited(character.name) && (
										<FaHeart onClick={() => actions.toggleFavorite(character.uid,
											"CHARACTER",
											character.name
										)} />

									)}
									{!NameIsFavorited(character.name) && (
										<CiHeart onClick={() => actions.toggleFavorite(character.uid,
											"CHARACTER",
											character.name
										)} />
									)}
								</div>
								<div className="col-10">
									<button type="button" className="btn" onClick={() => handleCharacterClick(character.uid)}>Learn More</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="cardContainer">
				{store.planets.map((planet) => (
					<div key={planet.uid} className="characterCard">
						<div>
							<a></a>
							<div className="row">
								<h3>{planet.name}</h3>
							</div>
							<div className="row buttonRow">
								<div className="col-2">
									{NameIsFavorited(planet.name) && (
										<FaHeart onClick={() => actions.toggleFavorite(planet.uid,
											"PLANET",
											planet.name
										)} />

									)}
									{!NameIsFavorited(planet.name) && (
										<CiHeart onClick={() => actions.toggleFavorite(planet.uid,
											"PLANET",
											planet.name
										)} />
									)}
								</div>
								<div className="col-10">

									<button type="button" className="btn" onClick={() => handlePlanetClick(planet.uid)}>Learn More</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
};
