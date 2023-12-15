// frontend/src/components/About.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./About.css";

function About() {
  // Define a state variable to hold the movie details
  const [movieDetails, setMovieDetails] = useState(null);
  // Use the useParams hook to access the movie ID
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie details from the API
    // Make sure to replace 'your-api-key' with your actual OMDB API key
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=5c85e8c0`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="about">
      {movieDetails ? (
        <div>
          <h2>{movieDetails.Title}</h2>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
          {/* Display other details as needed */}
          <p>Year: {movieDetails.Year}</p>
          <p>Genre: {movieDetails.Genre}</p>
          <p>Director: {movieDetails.Director}</p>
          <p>Type: {movieDetails.Type}</p>
          {/* ... more details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default About;
