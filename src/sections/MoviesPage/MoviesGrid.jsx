// Desc: Home page component

import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import MovieList from "../HomePage/MovieList";

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/popular?language=en",
                    {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                        },
                        signal: controller.signal,
                    }
                );

                if (!response.ok) throw new Error("Failed to fetch movies");

                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                if (error.name !== "AbortError") setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        return () => controller.abort();
    }, []);

    return (
        <Box sx={{ bgcolor: "black", minHeight: "100vh", p: 3 }}>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress color="secondary" />
                </Box>
            ) : error ? (
                <Typography color="error" align="center" variant="h6">
                    {error}
                </Typography>
            ) : (
                <MovieList title="Hot Movies" list_movies={movies} />
            )}
        </Box>
    );
};

export default MoviesGrid;
