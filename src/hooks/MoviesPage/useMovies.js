import { useState, useEffect, useCallback } from "react";
import { MOVIE_CATEGORIES, INITIAL_STATE } from "../../constants/MoviesPage/movieCategories";
import { fetchMoviesByCategory } from "../../utils/api/MoviesPage";

const useMovies = () => {
    const [movies, setMovies] = useState(INITIAL_STATE.movies);
    const [errors, setErrors] = useState(INITIAL_STATE.errors);

    const fetchMovies = useCallback(async () => {
        const controller = new AbortController();
        const { signal } = controller;

        const results = await Promise.allSettled(
            Object.entries(MOVIE_CATEGORIES).map(async ([key, category]) => {
                const { data, error } = await fetchMoviesByCategory(category, signal);
                return { key, data, error };
            })
        );

        const updatedMovies = {};
        const updatedErrors = {};

        results.forEach(({ value }) => {
            updatedMovies[value.key] = value.data;
            updatedErrors[value.key] = value.error;
        });

        setMovies(updatedMovies);
        setErrors(updatedErrors);

        return () => controller.abort();
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return { movies, errors, fetchMovies };
};

export default useMovies;
