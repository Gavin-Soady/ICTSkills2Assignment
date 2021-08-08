import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMoviesByDecade80s } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';


const MoviesByDecadePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMoviesByDecade80s)
  // I had refactored this already from exercise 1

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Movies of the 80's"
      movies={movies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />    
  );
};

export default withRouter(MoviesByDecadePage);