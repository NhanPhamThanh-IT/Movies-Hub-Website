import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import MovieSlider from './MovieSlider';

const MovieList = ({ title, list_movies }) => {
    return (
        <Box sx={{ padding: 3, marginBottom: 2, width: '100%', maxWidth: '1200px', margin: 'auto' }}>
            <Typography
                variant="h5"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 2.5,
                    textAlign: 'center',
                }}
            >
                {title}
            </Typography>
            <MovieSlider list_movies={list_movies} />
        </Box>
    );
};

MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    list_movies: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MovieList;
