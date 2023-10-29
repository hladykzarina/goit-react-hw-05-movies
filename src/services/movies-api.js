import axios from 'axios';

const API_KEY = '959c97e3f5136b0a1599d95df967b17e';
axios.defaults.baseURL = 'https://image.tmdb.org/t/p/w500';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

export const fetchByQuery = async (query, page = 1) => {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

export const fetchMoviesDetails = async id => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const fetchMoviesCredits = async id => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const fetchMoviesReviews = async (id, page = 1) => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return res.data.results;
};
