import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/Home/home';
import Header from './Components/Header/header';
import getMoviesService from './Core/ApiService';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getMoviesService(searchValue).then(response => {
      setMovies(response['data']['movies']);
    });
  }, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <Header header='Wookie Movies' searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
