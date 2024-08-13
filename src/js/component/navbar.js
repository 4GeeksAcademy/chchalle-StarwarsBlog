import React, {useContext} from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";



export const Navbar = () => {
	const {store,actions}=useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites {store.favorites.length}
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.map((favorite) =>
				(
					<li>
						<span>{favorite.name}</span>
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
