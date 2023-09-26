import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/actions/movieActions';
import './movieSearch.css';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleSearch = () => {
    dispatch(searchMovies(searchQuery));
    if (movies.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const noResultsMessage =
    "No movies found for your search. We will add the movies soon. Please search more accurately.";

  return (
    <div>
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={searchQuery.trim() === ''}>
          Search
        </button>

        {showError && movies.length === 0 && <p>{noResultsMessage}</p>}

        <div className="movie-card-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Release Year: {movie.releaseYear}</p>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Movie Search App</p>
      </footer>
    </div>
  );
};

export default MovieSearch;
