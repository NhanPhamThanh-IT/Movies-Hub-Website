import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const MovieCard = ({ movie }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '220px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: 3,
                margin: 'auto',
                transition: 'transform 0.4s ease-in-out, filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(1.2)',
                    boxShadow: '0px 10px 20px rgba(255, 255, 255, 0.3)',
                },
                '&:hover .movie-title': {
                    opacity: 0.8,
                    background: 'rgba(0, 0, 0, 0.85)',
                },
                '&:hover:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.3)',
                    zIndex: 1,
                    transition: 'opacity 0.4s ease-in-out',
                },
            }}
        >
            <img
                src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <Typography
                variant="h6"
                className="movie-title"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    width: '100%',
                    textAlign: 'center',
                    transition: 'opacity 0.3s ease-in-out, background 0.3s ease-in-out',
                }}
            >
                {movie.title}
            </Typography>
        </Box>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
