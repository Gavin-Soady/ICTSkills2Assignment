
  export const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMovie = async ( args ) => {
    // console.log(args)
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
  
  export const getGenres = async () => {
    const response = await  fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
  
  export const getMovieImages = async ({queryKey}) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = async() => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade = async (key, start) => {

    console.log(start);
    console.log(key.queryKey[0]);
    console.log(key.queryKey[1]);

    const startYear = key.queryKey[0];
    const endYear = key.queryKey[1];
    console.log("EndYear " + endYear);

    const response = await fetch(
    
      
     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };


  export const getMoviesByStar = async (props) => {

    console.log(props.queryKey[0]);
    
    const id = props.queryKey[0];
   
    const response = await fetch(
      
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_people=${id}&sort_by=vote_average.desc`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
/*
  export const getMoviesByDecadePre80s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=1979-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade80s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade90s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade00s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade10s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMoviesByDecade20s = async () => {
    const response = await fetch(
    
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-01-01`
      
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
  */