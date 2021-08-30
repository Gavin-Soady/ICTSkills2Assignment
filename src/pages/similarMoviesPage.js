import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies} from "../api/tmdb-api";
import { withRouter } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import SimilarMovies from '../components/cardIcons/similarMovies'



const SimilarMoviesPage = (props) => {

  const id = props.match.params.id;
  const movieTitle = props.match.params.title;
  const title = " Similar Movies for "+ movieTitle ;

  console.log(id);

  const {  data, error, isLoading, isError }  =
    useQuery( [id] , getSimilarMovies); 
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
      title={title}
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
       
      }}
      
    />    
  );
};

export default withRouter(SimilarMoviesPage);