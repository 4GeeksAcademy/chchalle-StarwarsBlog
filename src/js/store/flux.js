
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchCharacters: () => {
				fetch('https://www.swapi.tech/api/people?limit=100')
					.then((res) => res.json())
					.then((payload) => {
						setStore({ characters: payload.results })
					})
					.catch((err) => console.error(err))

			},
			fetchPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then((res) => res.json())
					.then((payload) => {
						setStore({ planets: payload.results })
					})
					.catch((err) => console.error(err))

			},
			fetchStarShip: () => {
				fetch('https://www.swapi.tech/api/starships/')
					.then((res) => res.json())
					.then((payload) => {
						setStore({ starships: payload.results })
					})
					.catch((err) => console.error(err))

			},
			toggleFavorite: (id, type, name) => {
				const store = getStore();

				let filteredFavorite = false;

				const newFavorites = store.favorites.filter((favorite) => {
					if (favorite.id === id && favorite.type === type) {
						filteredFavorite = true

						return false;
					}
					return true;
				})

				if (!filteredFavorite) {
					newFavorites.push({
						id, type, name

					})

				}
				setStore({ ...store, favorites: newFavorites })
				console.log("the store", store);
			}
			,
			navigateFromFavorite: (name, navigate) => {
				const store = getStore();
				const favoriteOfName = store.favorites.find((favorite) =>  (favorite.name === name) )

				const handleCharacterClick = (uid) => {
					navigate(`/details/${uid}`);
				};
				const handlePlanetClick = (uid) => {
					navigate(`/planet-learnMore/${uid}`);
				};
				const handleStarShipClick = (uid) => {
					navigate(`/starship-learnMore/${uid}`);
				};

				if(favoriteOfName.type==="CHARACTER"){handleCharacterClick(favoriteOfName.id)}
				if(favoriteOfName.type==="PLANET"){handlePlanetClick(favoriteOfName.id)}
				if(favoriteOfName.type==="STARSHIP"){handleStarShipClick(favoriteOfName.id)}

			}


		}

	}
};


export default getState;
