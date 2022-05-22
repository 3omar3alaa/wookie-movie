import React from "react";
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    let moviesByGenre = {};
    props.movies.forEach(movie => {
        movie.genres.forEach(genre => {
            if (typeof moviesByGenre[genre] === 'undefined') {
                moviesByGenre[genre] = []
            }
            moviesByGenre[genre].push(movie)
        })
    });
    return (
        <>
            {(Object.entries(moviesByGenre) || []).map(([Genre, Movies]) => {
                return (
                    <div>
                        <h1>{Genre}</h1>
                        <div className="row movie-row scroll-horizontal-row">
                            {(Object.entries(Movies).map(([key, movie]) => {
                                return (
                                    <div className="image-container d-flex justify-content-start m-3">
                                        <Link to={`/movie/${movie.slug}`}
                                            state={movie}
                                        >
                                            <img src={movie.poster} alt={movie.title}></img>
                                        </Link>
                                    </div>
                                )
                            }))}

                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default MovieList;