# Assignment - ReactJS app.

Name: Gavin Soady

## Overview.

Extended the Movies App to add filter for minumum rating, add a search by decade and search by moviestar funtionality. I have also created a sililar movies funtionality along with a some visual tweaks.

 
 + Filter movie byy minimum rating
 + Show movies by decade
 + Show movies by moviestar
 + Show similar movies

## Setup requirements.
+ Create folder in which you want to store the repo
+ Navigate to folder path via command line
+ type git clone https://github.com/Gavin-Soady/ICTSkills2Assignment.git into command line
+ Navigate into the newly dowloaded folder
+ Lanuch a terminal
+ Navigate focus to the terminal
+ Type npm install

## API Data Model.

getMoviesByDecade
Takes in a parameters of start year and end year and places them into:
https://api.themoviedb.org/3/discover/movie?api_key=8fa9d1872a01407fd953f5ce6bad7b25&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31
to return:
{
adult: false,
backdrop_path: "/bDnIpQHvr9YqCeDUsa8H4oWSTOF.jpg",
genre_ids: [
27
],
id: 10585,
original_language: "en",
original_title: "Child's Play",
overview: "A single mother gives her son a beloved doll for his birthday, only to discover that it is possessed by the soul of a serial killer.",
popularity: 81.628,
poster_path: "/wvpgvcWNkF2HLuTEMIM7K83MvZ.jpg",
release_date: "1988-11-08",
title: "Child's Play",
video: false,
vote_average: 6.6,
vote_count: 1951
},
 
getMoviesByStar
Takes in a actor id paramater and places it into:
   https://api.themoviedb.org/3/discover/movie?api_key=8fa9d1872a01407fd953f5ce6bad7b25&with_people=287&sort_by=vote_average.desc

to return:

{
adult: false,
backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
genre_ids: [
18
],
id: 550,
original_language: "en",
original_title: "Fight Club",
overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
popularity: 57.801,
poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
release_date: "1999-10-15",
title: "Fight Club",
video: false,
vote_average: 8.4,
vote_count: 22295
},

getSimilarMovies
Takes in a movie id paramater and places it into:
https://api.themoviedb.org/3/movie/550/similar?api_key=8fa9d1872a01407fd953f5ce6bad7b25&language=en-US&page=1

{
adult: false,
backdrop_path: "/ojG57hVx69vhk5DDGPIcfyRR55I.jpg",
genre_ids: [
18,
10752
],
id: 11778,
title: "The Deer Hunter",
original_language: "en",
original_title: "The Deer Hunter",
overview: "A group of working-class friends decide to enlist in the Army during the Vietnam War and finds it to be hellish chaos -- not the noble venture they imagined. Before they left, Steven married his pregnant girlfriend -- and Michael and Nick were in love with the same woman. But all three are different men upon their return.",
popularity: 26.687,
poster_path: "/wT3DeCZ3Ax5VYhKu6ajyEvA1hXG.jpg",
release_date: "1978-03-09",
video: false,
vote_average: 8.025,
vote_count: 2676
},

## App Design.

### Component catalogue.


![image](https://user-images.githubusercontent.com/60347182/131417426-f515ab38-04ca-43ea-a510-2e387f16ed0e.png)


### UI Design.
CLicking the Movies by decade option will giive you a drop down menu to select a decade
![image](https://user-images.githubusercontent.com/60347182/131417831-519d828c-1532-4d2d-9218-8892b2071694.png)

Clicking on Movies by Starts option will give you a drop down menu to select a popular actor
![image](https://user-images.githubusercontent.com/60347182/131418049-635c69ed-d6b6-419c-bb4b-9c9c8b7c93bc.png)

The filter card has a new filter by minumum rating fuctionality
![image](https://user-images.githubusercontent.com/60347182/131418207-2d1e5cbc-5f19-4365-9c87-403c15551ceb.png)


### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ get /similarMovies/:id/:title  - SimilarMoviesPage
+ get /movies/moviesByStars/:id/:star  - MoviesByStarsPage
+ get /movies/moviesByDecade/:start/:end/:decade - MoviesByDecadePage


## Independent learning (If relevant).
I used drop down menus from material ui library
C:\Users\gsoad\Desktop\Desktop\WIT\ICT Skills 2\AssignmentApp\ictskills-moviesApp\src\components\dropDownMenu\index.js
https://material-ui.com/components/menus/

Multiple prop routing path
C:\Users\gsoad\Desktop\Desktop\WIT\ICT Skills 2\AssignmentApp\ictskills-moviesApp\src\index.js
C:\Users\gsoad\Desktop\Desktop\WIT\ICT Skills 2\AssignmentApp\ictskills-moviesApp\src\api\tmdb-api.js
https://betterprogramming.pub/how-to-pass-multiple-route-parameters-in-a-react-url-path-4b919de0abbe
