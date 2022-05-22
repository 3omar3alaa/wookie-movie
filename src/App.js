import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/Home/home';
import Header from './Components/Header/header';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    axios.get('https://wookie.codesubmit.io/movies', {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      },
      params: {
        q: searchValue
      }
    }).then((response) => {
      setMovies(response['data']['movies']);
    })
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <Header header='Wookie Movies' searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
