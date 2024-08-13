import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { CiHeart } from "react-icons/ci";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {

		actions.fetchCharacters();
	}, []);
	return (
		<div >
			<p>home page</p>

			<div style={{ display: 'flex', gap: '1rem' }}>
				{store.characters.map((character) => (
					<div key={character.uid}>
						<div>
							<a></a>

							<p>{character.name}</p>
							<CiHeart onClick={()=>actions.toggleFavorite(character.uid,
								"CHARACTER",
								character.name
							)} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
};
