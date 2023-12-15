// frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios from "axios";
import Movies from "./components/Movies";
import About from "./components/About";
import SearchBar from "./components/SearchBar";
// import FilterBar from "./components/FilterBar";

import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // The handleSearch function now properly defined within the App component
  const handleSearch = async () => {
    try {
      // Construct the URL with the search term and API key
      const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
        searchTerm
      )}&apikey=${import.meta.env.VITE_API_KEY}`;
      console.log(import.meta.env.VITE_API_KEY); // Should output: 5c85e8c0

      const response = await fetch(url);

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const moviesData = await response.json();

      // Assuming the API returns an object with a 'Search' key that contains the movies array
      setMovies(moviesData.Search);
      console.log("moviesData: ", moviesData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to My Movie Recommendation App</p>
      </header>
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={handleSearch}>Search</button>
        <Routes>
          <Route path="/" element={<Movies movies={movies} />} />
          <Route path="/movie/:id" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
