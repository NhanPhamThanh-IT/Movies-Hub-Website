// Desc: This file contains the MovieList component which is used to display a list of movies in a slider.

// Import necessary react modules
import React from 'react';

// Import prop types
import PropTypes from 'prop-types';

// Import necessary MUI components
import { Typography, Box } from '@mui/material';

// Import the custom component
import MovieSlider from '../../components/HomePage/MovieSlider';

// MovieList component
const MovieList = ({ title, list_movies }) => {
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
            <MovieSlider list_movies={list_movies} />
        </Box>
    );
};

// Define prop types
MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    list_movies: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Export the MovieList component
export default MovieList;
