import React, {useContext,useEffect, useState} from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {
	const navigate=useNavigate()
	const {store,actions}=useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
		actions.fetchPlanets();
	}, []);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites {store.favorites.length}
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.map((favorite) =>
				(
					<li>
						<button type="button" className="btn" onClick={() => actions.navigateFromFavorite(favorite.name, navigate)}><span>{favorite.name}</span></button>
						
						<FaTrash onClick={() => actions.toggleFavorite(
							favorite.id,
							favorite.type,
							favorite.name
						)} />
					</li>
				))}
			</ul>
		</nav>
	);
};
