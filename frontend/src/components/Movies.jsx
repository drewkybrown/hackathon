import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

// movies function
function Movies({ movies }) {
  return (
    <div className="Movies">
      <header className="Movies-header">
        <h2>Movie List</h2>
        <ul>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <p>{movie.Title}</p>
                </Link>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
              </li>
            ))
          ) : (
            <p>No movies found!</p>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Movies;
