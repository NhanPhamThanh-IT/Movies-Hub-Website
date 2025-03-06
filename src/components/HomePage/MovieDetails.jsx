import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const MovieDetails = ({ movie }) => {
    return (
        <Card sx={{ mx: 'auto', my: 2, boxShadow: 3, borderRadius: 3 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={`${import.meta.env.VITE_IMG_URL}/${movie.poster_path}`}
                        alt={movie.title}
                        sx={{ width: '100%', height: '90%', borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {movie.title} ({new Date(movie.release_date).getFullYear()})
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {movie.release_date} | {movie.runtime} minutes | Rating: {movie.vote_average} ({movie.vote_count} votes)
                        </Typography>
                        <Box sx={{ my: 1 }}>
                            <Typography variant="body2"><strong>Original Language:</strong> {movie.original_language}</Typography>
                            <Typography variant="body2"><strong>Status:</strong> {movie.status}</Typography>
                            <Typography variant="body2"><strong>Budget:</strong> ${movie.budget.toLocaleString()}</Typography>
                            <Typography variant="body2"><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mt: 2 }}>{movie.overview}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

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

export default MovieDetails;