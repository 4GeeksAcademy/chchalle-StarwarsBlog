const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
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
				setStore({ ...store,favorites: newFavorites })
				console.log("the store",store);
			}


		}

	}
};


export default getState;
