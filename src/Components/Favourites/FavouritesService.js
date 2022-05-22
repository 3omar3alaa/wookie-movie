// import { useState } from 'react';

// function useFavouritesService(movie, method) {
// 	const [favourites, setFavourites] = useState([]);
// 	if(method === 'ADD'){
// 		const newFavouriteList = [...favourites, movie];
// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	}
// 	else {
// 		const newFavouriteList = favourites.filter(
// 			(favourite) => favourite.imdbID !== movie.imdbID
// 		);
// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	}
// 	return favourites;
// }

const FAVOURITES_NAME = 'movie-favourites';

const saveToLocalStorage = (items) => {
	localStorage.setItem(FAVOURITES_NAME, JSON.stringify(items));
};

const getFromLocalStorage = (item_name) => {
	let items = JSON.parse(localStorage.getItem(item_name));
	if (items === null) items = [];
	return items;
}

const GetFavourites = () => {
	return getFromLocalStorage(FAVOURITES_NAME);
}

const AddFavourites = (movie) => {
	let movieFavouritesList = getFromLocalStorage('movie-favourites');
	let movieExists = movieFavouritesList.filter(x => x.id === movie.id);
	if (movieExists.length === 0) {
		const newFavouriteList = [...movieFavouritesList, movie];
		saveToLocalStorage(newFavouriteList);
	}
};


const RemoveFavourites = (movie) => {
	let movieFavouritesList = getFromLocalStorage('movie-favourites');
	const newFavouriteList = movieFavouritesList.filter(
		(favourite) => favourite.imdbID !== movie.imdbID
	);
	saveToLocalStorage(newFavouriteList);
};

export { GetFavourites, AddFavourites, RemoveFavourites };
