import moviesData from '../../data/moviesData.json';

export const searchMovies = (query) => (dispatch) => {
  const filteredMovies = moviesData.filter((movie) =>
  movie.title.toLowerCase().includes(query.toLowerCase())
);

  dispatch({
    type: 'SEARCH_MOVIES',
    payload: filteredMovies,
  });
};