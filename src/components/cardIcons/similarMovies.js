import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const SimilarMoviesIcon = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movieId: movie.id,
        },
      }}
    >
      <RateReviewIcon color="red" fontSize="large" />
    </Link>
  );
};

export default SimilarMoviesIcon ;