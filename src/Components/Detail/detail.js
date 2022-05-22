import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, Grid, Button } from '@material-ui/core';
import Moment from 'moment';
import Header from '../Header/header';
import { AddFavourites } from "../Favourites/FavouritesService";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        backgroundSize: 'cover',
        fontSize: 20,
        height: '90vh'
    },
    detail: {
        color: '#fff',
        maxWidth: 1240,
        width: '100%',
        paddingTop: '2%',
        paddingRight: 15,
        paddingLeft: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    title: {
        fontSize: '2.5em',
        marginBottom: '2%'
    },
    overview: {
        marginTop: '2.5em'
    },
    favourites: {
        marginBottom: '1%',
        color: 'black',
        backgroundColor: '#ffffff'
    }
}));

const MovieDetail = (props) => {
    const classes = useStyles()
    const location = useLocation();
    const movie = location.state;

    return (
        <div className="container-fluid movie-app">
            <Header header='Wookie Movies' />
            <div className={classes.backdrop} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 100%), url(${movie.backdrop})` }}>
                <Grid container className={classes.detail} spacing={3} >
                    <Grid item xs={4} className="poster">
                        <img src={movie.poster} alt={movie.title} />
                    </Grid>
                    <Grid item xs={8}>
                        <p className={classes.title}>{movie.title}</p>
                        <div className="flex justify-center mt-40">
                            <Button className={classes.favourites} onClick={(() => AddFavourites(movie))} variant="contained">Add To Favourites</Button>
                        </div>
                        <p>Rating: {movie.imdb_rating}</p>
                        <p>Release: {Moment(movie.released_on).format('DD-MM-YYYY')}</p>
                        <p>Classification: {movie.classification}</p>
                        <p>Cast: {movie.cast.map((cast, i) => {
                            if (i) { return `, ${cast}` }
                            return cast
                        })}</p>
                        <p className={classes.overview}>{movie.overview}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default MovieDetail;