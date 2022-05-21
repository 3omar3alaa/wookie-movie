import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = (props) => {
    const location = useLocation();
    //const { from } = location.state;
    // console.log(location.state);
    const movie = location.state;
    if(movie === null){
        console.log("here");
    }
    return (
        // <>
        //     {props.movie.map((movie, index) => (
        //         <div className="image-container d-flex justify-content-start m-3">
        //             <img src={movie.poster} alt="movie"></img>
        //         </div>
        //     ))}
        // </>

        <div>
            <p>{movie.title}</p>
              <p>Rating: {movie.imdb_rating}</p>
              {/* <p>Release: {Moment(movie.released_on).format('DD-MM-YYYY')}</p> */}
              <p>Classification: {movie.classification}</p>
              <p>Cast: {movie.cast.map((cast, i) => {
                if (i) { return `, ${cast}` }
                return cast
              })}</p>
              <p>{movie.overview}</p>
        </div>
    );
}

export default MovieDetail;