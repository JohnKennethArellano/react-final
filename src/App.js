import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { getAxios } from "./API/Axios"; // Assuming this is correctly set up
import Container from "./Components/Container";
import SearchComponent from "./Components/SearchComponent";
import BodyComponent from "./Components/BodyComponent";
import { API_KEY } from "./API/Keys"; // Ensure your API_KEY is imported

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    const { movieTitle, year, selectedValue } = searchParams;
    console.log("Search Parameters:", searchParams);

    setLoading(true);
    setError(null);

    try {
      const data = await getAxios(movieTitle, year);
      console.log("API Response:", data);
      if (data.Response === "True") {
        const moviesWithDetails = await fetchMovieDetails(data.Search, selectedValue ? 'full' : 'short');
        setMovies(moviesWithDetails);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (movies, plot) => {
    const movieDetailsPromises = movies.map(async (movie) => {
      const response = await getMovieDetail(movie.imdbID, plot);
      return { ...movie, Plot: response.Plot, Genre: response.Genre, Actors: response.Actors }; // Add more details as needed
    });

    return Promise.all(movieDetailsPromises);
  };

  const getMovieDetail = async (id, plot) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}${plot === 'full' ? '&plot=full' : ''}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error; 
    }
  };

  return (
    <>
      <Container 
        searchComponent={<SearchComponent onSearch={handleSearch} />} 
        bodyComponent={<BodyComponent movies={movies} />}
      />
    </>
  );
}
