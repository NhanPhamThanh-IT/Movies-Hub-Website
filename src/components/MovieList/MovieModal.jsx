// Desc: This file contains the MovieModal component which is a modal that displays the details of a movie when clicked on a movie card.

// Import necessary modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Backdrop, Fade, Box, Typography, Button } from '@mui/material';

// Import custom components
import MovieDetails from './MovieDetails';

// Importing utils functions
import { getOption } from '../../utils/api/options';
import { API_BASE_URL } from '../../utils/api/config';

// MovieModal component
const MovieModal = ({ open, handleClose, movie }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movie || !movie.id || !open) return;

        const fetchMovieDetails = async () => {
            try {
                const url = `${API_BASE_URL}/${movie.id}?language=en-US`;
                const response = await fetch(url, getOption);
                if (!response.ok) throw new Error('Failed to fetch movie details');
                const data = await response.json();
                setMovieDetails(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovieDetails();
    }, [movie, open]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        px: 2,
                        borderRadius: '10px',
                        maxWidth: '80%',
                        maxHeight: '90%',
                        width: '90%',
                        overflow: 'hidden',
                        justifyItems: 'center',
                        bgcolor: 'rgba(0, 0, 0, 1)',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: movie?.poster_path
                                ? `url(${import.meta.env.VITE_IMG_URL}/${movie.poster_path})`
                                : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(20px)',
                            zIndex: -1,
                        }}
                    />

                    {error ? (
                        <Typography color="error">{error}</Typography>
                    ) : movieDetails ? (
                        <MovieDetails movie={movieDetails} />
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

// Prop types for MovieModal component
MovieModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

// Exporting MovieModal component
export default MovieModal;