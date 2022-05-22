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
	let movieFavouritesList = getFromLocalStorage(FAVOURITES_NAME);
	let movieExists = movieFavouritesList.filter(x => x.id === movie.id);
	if (movieExists.length === 0) {
		const newFavouriteList = [...movieFavouritesList, movie];
		saveToLocalStorage(newFavouriteList);
	}
};


const RemoveFavourites = (movie) => {
	let movieFavouritesList = getFromLocalStorage(FAVOURITES_NAME);
	const newFavouriteList = movieFavouritesList.filter(
		(favourite) => favourite.id !== movie.id
	);
	saveToLocalStorage(newFavouriteList);
};

const IsFavourite = (movie) => {
	const movieFavouritesList = getFromLocalStorage(FAVOURITES_NAME);
	let movieExists = movieFavouritesList.filter(x => x.id === movie.id);
	if (movieExists.length === 0) return false;
	return true;
}
export { GetFavourites, AddFavourites, RemoveFavourites, IsFavourite };
