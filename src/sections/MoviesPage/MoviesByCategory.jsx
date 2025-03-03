// Desc: Component to display movies categorized by type (Now Playing, Upcoming, etc.)

// Importing necessary hooks from React
import { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';

// Importing custom components
import MovieList from '../../sections/HomePage/MovieList';

// Base URL for The Movie Database (TMDB) API
const API_BASE_URL = "https://api.themoviedb.org/3/movie";

// Define movie categories and their corresponding API endpoints
const MOVIE_CATEGORIES = {
    nowPlaying: "now_playing",
    upcoming: "upcoming",
    popular: "popular",
    topRated: "top_rated"
};

// Initial state structure for movies and errors
const INITIAL_STATE = {
    movies: { nowPlaying: [], upcoming: [], popular: [], topRated: [] },
    errors: { nowPlaying: null, upcoming: null, popular: null, topRated: null }
};

/**
 * Fetch movies from a given category.
 * @param {string} category - The movie category to fetch.
 * @param {AbortSignal} signal - The signal to abort the request if needed.
 * @returns {Promise<{data: array, error: string | null}>} - Movie data or an error message.
 */
const fetchMoviesByCategory = async (category, signal) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${category}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            },
            signal // Allows request cancellation if component unmounts
        });

        if (!response.ok) throw new Error(`Failed to fetch ${category} movies`);

        const data = await response.json();
        return { data: data.results, error: null };
    } catch (error) {
        return { data: [], error: error.message };
    }
};

/**
 * Component to display movies categorized by type (Now Playing, Upcoming, etc.).
 */
const MoviesByCategory = () => {
    // State to hold movie data and errors for each category
    const [movies, setMovies] = useState(INITIAL_STATE.movies);
    const [errors, setErrors] = useState(INITIAL_STATE.errors);

    /**
     * Fetch all movie categories from the API.
     * Uses useCallback to avoid unnecessary re-creation of function.
     */
    const fetchMovies = useCallback(async () => {
        const controller = new AbortController(); // Allows request cancellation
        const { signal } = controller;

        // Fetch movies concurrently using Promise.allSettled
        const results = await Promise.allSettled(
            Object.entries(MOVIE_CATEGORIES).map(async ([key, category]) => {
                const { data, error } = await fetchMoviesByCategory(category, signal);
                return { key, data, error };
            })
        );

        // Process the results and update state
        const updatedMovies = {};
        const updatedErrors = {};

        results.forEach(({ value }) => {
            updatedMovies[value.key] = value.data;
            updatedErrors[value.key] = value.error;
        });

        setMovies(updatedMovies);
        setErrors(updatedErrors);

        // Cleanup function to abort fetch requests when component unmounts
        return () => controller.abort();
    }, []);

    /**
     * useEffect to fetch movies when the component mounts.
     * The dependency array contains fetchMovies to ensure it runs only when necessary.
     */
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <Box>
            {/* Dynamically render MovieList components for each category */}
            {Object.entries(MOVIE_CATEGORIES).map(([key, _]) => (
                <MovieList
                    key={key}
                    title={key.replace(/([A-Z])/g, ' $1').trim()} // Convert camelCase to readable format
                    list_movies={movies[key]}
                    error={errors[key]}
                />
            ))}
        </Box>
    );
};

// Export the MoviesByCategory component
export default MoviesByCategory;
