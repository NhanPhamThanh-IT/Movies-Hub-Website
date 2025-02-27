// Desc: Create a banner component with a background image, title, description, and action buttons

// Import necessary modules
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PlayArrow, Bookmark } from '@mui/icons-material';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// Rating stars component
const RatingStars = ({ startColor = '#FFD700' }) => (
    <Typography
        variant="h5"
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            letterSpacing: 1
        }}>
        {[...Array(4)].map((_, index) => <FaStar key={index} style={{ color: startColor }} />)}
        <FaStarHalfAlt style={{ color: startColor }} />
    </Typography>
);

// Banner content component
const BannerContent = () => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: '50%',
        color: 'white'
    }}>
        <Typography
            variant="h5"
            sx={{
                bgcolor: 'red',
                color: 'white',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                borderRadius: 1,
                maxWidth: 'fit-content'
            }}>
            TV Show
        </Typography>
        <Typography
            variant="h3"
            fontWeight="bold"
        >
            Nghe nói em thích tôi
        </Typography>
        <RatingStars />
        <Typography
            variant="body1"
            sx={{
                textAlign: 'justify',
                opacity: 0.9
            }}>
            EduChain AI is a next-generation learning platform that combines artificial intelligence (AI) and blockchain to create a transparent, efficient, and personalized education ecosystem. AI optimizes learning paths, suggests courses, and generates smart assessments, while blockchain secures certificates, ensuring authenticity and preventing fraud.
        </Typography>
        <Box
            sx={{
                display: 'flex',
                gap: 2
            }}>
            <Button
                variant="contained"
                color="error"
                sx={{
                    fontWeight: 'bold',
                    px: 3
                }}
                startIcon={<PlayArrow />}>
                Watch now
            </Button>
            <Button
                variant="outlined"
                sx={{
                    color: 'white',
                    borderColor: 'white',
                    fontWeight: 'bold',
                    px: 3
                }}
                startIcon={<Bookmark />}>
                Add to watchlist
            </Button>
        </Box>
    </Box>
);

// Banner image component
const BannerImage = () => (
    <Box sx={{
        width: '40%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img
            src="subBanner.jpeg"
            alt="banner"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8
            }} />
    </Box>
);

// Banner component
const Banner = () => {
    return (
        <Box sx={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'hidden',
            px: 6,
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <BannerContent />
            <BannerImage />
        </Box>
    );
};

// Export the Banner component
export default Banner;
