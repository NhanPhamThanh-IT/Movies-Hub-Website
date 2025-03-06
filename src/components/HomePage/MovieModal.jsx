import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Backdrop, Fade, Box, Typography, Button } from '@mui/material';
import { getOption } from '../../utils/api/options';
import { API_BASE_URL } from '../../utils/api/config';

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
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                        maxWidth: 500,
                        width: '90%',
                        border: '2px solid #000',
                    }}
                >
                    {error ? (
                        <Typography color="error">{error}</Typography>
                    ) : movieDetails ? (
                        <>
                            <Typography variant="h6" component="h2">
                                {movieDetails.title}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                {movieDetails.overview}
                            </Typography>
                        </>
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                    <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
                        Close
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};

MovieModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieModal;