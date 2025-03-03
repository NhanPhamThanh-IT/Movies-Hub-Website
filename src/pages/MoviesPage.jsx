import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import MovieList from '../sections/HomePage/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        upcoming: [],
        popular: [],
        topRated: []
    });

    const [errors, setErrors] = useState({
        nowPlaying: null,
        upcoming: null,
        popular: null,
        topRated: null
    });

    useEffect(() => {
        let isMounted = true;

        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };

            const urls = {
                nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US',
                upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US',
                popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US',
                topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US'
            };

            // Gọi từng API riêng lẻ, nếu lỗi thì chỉ lỗi danh mục đó
            await Promise.allSettled(
                Object.entries(urls).map(async ([key, url]) => {
                    try {
                        const response = await fetch(url, options);
                        if (!response.ok) throw new Error(`Failed to fetch ${key} movies`);
                        const data = await response.json();

                        if (isMounted) {
                            setMovies((prev) => ({ ...prev, [key]: data.results }));
                            setErrors((prev) => ({ ...prev, [key]: null }));
                        }
                    } catch (error) {
                        if (isMounted) {
                            setErrors((prev) => ({ ...prev, [key]: error.message }));
                        }
                    }
                })
            );
        };

        fetchMovies();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <Box sx={{ bgcolor: 'black', p: 3 }}>
            <MovieList title="Now Playing Movies" list_movies={movies.nowPlaying} error={errors.nowPlaying} />
            <MovieList title="Upcoming Movies" list_movies={movies.upcoming} error={errors.upcoming} />
            <MovieList title="Popular Movies" list_movies={movies.popular} error={errors.popular} />
            <MovieList title="Top Rated Movies" list_movies={movies.topRated} error={errors.topRated} />
        </Box>
    );
};

export default MoviesPage;
