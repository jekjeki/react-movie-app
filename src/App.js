import {useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import React from 'react';
import MovieCard from './MovieCard';

// const Person = (props) => {
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// 450ac88d

const API_URL = 'http://www.omdbapi.com?apikey=450ac88d';


// const movie1 = 
// {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {

  // const [counter, setCounter] = useState(0);
  // useEffect( () => {
  //   setCounter(100);
  // },[] )
  // const name = 'zaky';
  // const isNameShowing = true;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect( () => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="App">

    <h1>MovieLand</h1>


    <div className='search'>
      <input
        placeholder='search movie'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
      />
      <img 
        src={searchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>

    {
      movies?.length > 0
      ? (
        <div className='container'>
        {
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        }
      </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )
    }

   


      {/* use state  */}
      {/* <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((next) => next+1)}>+</button> */}


      {/* props  */}
      {/* <Person name={'john'} lastName={'doe'} age={10}/>
      <Person /> */}
      
      {/* <h1>Hello {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
      <>
        <h1>{name}</h1>
      </>
      ) : (
        <>
        <h1>test</h1>
        <h2>there is no name</h2>
        </>
      )} */}
    </div>
  );
}

export default App;
