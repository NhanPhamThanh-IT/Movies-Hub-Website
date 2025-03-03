// Desc: This file contains the MovieList component, which displays a list of movies in a slider.

// Import necessary React modules
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import necessary MUI components
import { Typography, Box } from '@mui/material';

// Import the custom component
import MovieSlider from '../../components/HomePage/MovieSlider';

// MovieList component
const MovieList = ({ title, list_movies, error }) => {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3 },
                py: 3,
                marginBottom: 2,
                width: '100%',
                maxWidth: { xs: '100%', sm: '90%', md: '1200px' },
                margin: 'auto',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 2.5,
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                {title}
            </Typography>

            {error ? (
                <Typography
                    variant="h6"
                    sx={{
                        color: 'red',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        padding: 2,
                        borderRadius: 2,
                    }}
                >
                    ⚠ {error}
                </Typography>
            ) : (
                <MovieSlider list_movies={list_movies} />
            )}

        </Box>
    );
};

// Define PropTypes
MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    list_movies: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    error: PropTypes.string, // Added error prop to handle API errors
};

// Export the MovieList component
export default MovieList;
