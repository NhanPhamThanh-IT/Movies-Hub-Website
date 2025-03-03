import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import MovieList from '../../sections/HomePage/MovieList';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
            };
            const urls = [
                'https://api.themoviedb.org/3/movie/now_playing?language=en-US',
                'https://api.themoviedb.org/3/movie/upcoming?language=en-US',
                'https://api.themoviedb.org/3/movie/popular?language=en-US',
                'https://api.themoviedb.org/3/movie/top_rated?language=en-US'
            ];

            try {
                const responses = await Promise.allSettled(urls.map(url => fetch(url, options)));
                let allMovies = [];

                responses.forEach((res, index) => {
                    if (res.status === 'fulfilled' && res.value.ok) {
                        res.value.json().then(data => {
                            if (isMounted) {
                                allMovies = [...allMovies, ...data.results];
                                setMovies(allMovies);
                            }
                        });
                    } else {
                        setError(`Failed to fetch movies from ${urls[index]}`);
                    }
                });
            } catch (err) {
                setError('Failed to fetch movies');
            }
        };

        fetchMovies();
        return () => { isMounted = false; };
    }, []);

    return (
        <Box sx={{ p: 3 }}>
            {error ? <p>{error}</p> : (
                <Grid container spacing={2}>
                    {movies.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <MovieList title={movie.title} list_movies={[movie]} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default MoviesGrid;
