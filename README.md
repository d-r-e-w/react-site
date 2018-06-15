# run project

npm install

npm start

# react-site

Documentation	https://developers.themoviedb.org/3
	
BaseURL	https://api.themoviedb.org/3
API Key (query name "api_key")	7bd61d5db2476d1307ff393ff142924b
	
Image url	https://image.tmdb.org/t/p/w1280{backdrop_path}
Poster url	https://image.tmdb.org/t/p/w342{poster_path}
	
Genre list	/genre/movie/list
Genre movies	/genre/{genre_id}/movies
	
Movies - popular	/movie/popular
Movies - top rated	/movie/top_rated
Movies - upcomming	/movie/upcoming
	
Search	/search/movie?query={query}
	
Movie details	/movie/{movie_id}
	
Details example:	https://api.themoviedb.org/3/movie/374720?api_key=7bd61d5db2476d1307ff393ff142924b
Image example:	https://image.tmdb.org/t/p/w1280/4yjJNAgXBmzxpS6sogj4ftwd270.jpg
	
	
Routes by page	
Home	/
Genre List	/genres/
Genre	/genres/{genre-name}
Most popular	/most-popular
Top rated	/top-rated
Upcomming	/upcomming
Movie	/movie/{movie-id}
Wishlist (bonus)	/wishlist
Search (bonus)	/search?query={search-query}
