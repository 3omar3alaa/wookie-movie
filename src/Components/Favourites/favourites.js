import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import { GetFavourites, RemoveFavourites } from "./FavouritesService";
import './favourites.css';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const movieFavourites = GetFavourites();
        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, [favourites]);

    return (
        <div className="container-fluid movie-app">
            <Header header='Wookie Movies' />
            <div className='row d-flex align-items-center mb-4'>
                <div className='col'>
                    <h1>Favourites</h1>
                </div>
            </div>

            <div>
                <div className="row movie-row">
                    {(Object.entries(favourites).map(([key, movie]) => {
                        return (
                            <>
                                <div className="image-container d-flex justify-content-start m-3">
                                    <img src={movie.poster} alt={movie.title}></img>
                                    <div
                                        onClick={() => RemoveFavourites(movie)}
                                        className='overlay d-flex align-items-center justify-content-center'
                                    >
                                        <div className='remove-fav'>
                                            <span className='mr-2'>Remove From Favourites</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }))}

                </div>
            </div>
        </div>

    );
};

export default Favourites;