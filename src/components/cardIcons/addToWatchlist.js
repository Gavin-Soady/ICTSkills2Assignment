import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };
  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;