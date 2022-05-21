import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/Home/home';
import Header from './Components/Header/header';
import MovieSearch from './Components/Search/search';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    axios.get('https://wookie.codesubmit.io/movies', {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      },
      params:{
        q : searchValue
      }
    }).then((response) => {
      setMovies(response['data']['movies']);
    })
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. 3amoooor
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='container-fluid movie-app'>
      <div className='row header d-flex align-items-center mb-4'>
        <Header header='Wookie Movies' />
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
