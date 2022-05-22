import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, Grid, Button, CircularProgress } from '@material-ui/core';
import Moment from 'moment';
import Header from '../Header/header';
import './detail.css';

const MovieDetail = (props) => {
    const location = useLocation();
    //const { from } = location.state;
    // console.log(location.state);
    const movie = location.state;
    if (movie === null) {
        console.log("here");
    }
    return (
        <>
            <Header header='Wookie Movies' />
            <div className="backdrop" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 100%), url(${movie.backdrop})` }}>
                <Grid container className="detail" spacing={3} >
                    <Grid item xs={4} className="poster">
                        <img src={movie.poster} alt={movie.title} />
                    </Grid>
                    <Grid item xs={8}>
                        <p className="title">{movie.title}</p>
                        <p>Rating: {movie.imdb_rating}</p>
                        <p>Release: {Moment(movie.released_on).format('DD-MM-YYYY')}</p>
                        <p>Classification: {movie.classification}</p>
                        <p>Cast: {movie.cast.map((cast, i) => {
                            if (i) { return `, ${cast}` }
                            return cast
                        })}</p>
                        <p className="overview">{movie.overview}</p>
                    </Grid>
                    <div className="flex justify-center mt-40">
                        <Button variant="contained" color="primary">Add To Favourites</Button>
                    </div>
                </Grid>
            </div>
        </>
    );
}

export default MovieDetail;