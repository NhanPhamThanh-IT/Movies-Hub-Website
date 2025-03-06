// Desc: Movie details component

// Importing necessary modules
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

// MovieDetails component
const MovieDetails = ({ movie }) => {
    return (
        <Card sx={{
            mx: 'auto',
            my: 2,
            color: 'white',
            bgcolor: 'transparent',
            boxShadow: 'none',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={`${import.meta.env.VITE_IMG_URL}/${movie.poster_path}`}
                        alt={movie.title}
                        sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 2,
                            zIndex: 1
                        }}
                    />
                    <CardContent sx={{ position: 'relative', zIndex: 2, color: 'white', p: 3 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {movie?.title} ({movie?.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'})
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {movie?.release_date || 'Unknown'} | {movie?.runtime || 'N/A'} minutes |
                            Rating: {movie?.vote_average || 'N/A'} ({movie?.vote_count || 0} votes)
                        </Typography>
                        <Box sx={{ my: 1 }}>
                            <Typography variant="body2"><strong>Original Language:</strong> {movie?.original_language || 'N/A'}</Typography>
                            <Typography variant="body2"><strong>Status:</strong> {movie?.status || 'N/A'}</Typography>
                            <Typography variant="body2"><strong>Budget:</strong> ${movie?.budget ? movie.budget.toLocaleString() : 'N/A'}</Typography>
                            <Typography variant="body2"><strong>Revenue:</strong> ${movie?.revenue ? movie.revenue.toLocaleString() : 'N/A'}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {movie?.overview || 'No description available.'}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

// Prop types for MovieDetails component
MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number.isRequired,
        original_language: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
    }).isRequired,
};

// Exporting MovieDetails component
export default MovieDetails;