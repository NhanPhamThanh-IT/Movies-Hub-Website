// Desc: Movie slider component

// Import necessary modules
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

// Import custom components
import MovieCard from './MovieCard';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// MovieSlider component
const MovieSlider = ({ list_movies }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, centerMode: true } },
            { breakpoint: 900, settings: { slidesToShow: 2, centerMode: true } },
            { breakpoint: 600, settings: { slidesToShow: 1, centerMode: true } },
        ],
    };

    return (
        <Slider {...settings}>
            {list_movies.length > 0 ? (
                list_movies.map((movie, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <MovieCard movie={movie} />
                    </Box>
                ))
            ) : (
                <Typography color="gray" textAlign="center">Not found any movies!</Typography>
            )}
        </Slider>
    );
};

// Prop types for MovieSlider component
MovieSlider.propTypes = {
    list_movies: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Exporting MovieSlider component
export default MovieSlider;
