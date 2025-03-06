// Desc: Optimized MovieDetails component

// Import necessary dependencies
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
    CardActions,
    Stack,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// Import custom components
import InteractiveButton from '../Button/InteractiveButton';
import DisplaySingleAttribute from '../Text/DisplaySingleAttribute';
import DisplayArrayAttribute from '../Text/DisplayArrayAttribute';
import CountryIconAsText from '../Text/CountryIconAsText';

// MovieDetails component
const MovieDetails = ({ movie }) => {
    const {
        title,
        overview,
        poster_path,
        release_date,
        runtime,
        vote_average,
        vote_count,
        original_language,
        status,
        genres,
    } = movie;

    const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';

    return (
        <Card sx={{ mx: 'auto', my: 2, color: 'white', bgcolor: 'transparent', boxShadow: 'none' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={`${import.meta.env.VITE_IMG_URL}/${poster_path}`}
                        alt={title}
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
                            zIndex: 1,
                            m: 2,
                        }}
                    />
                    <CardContent sx={{ position: 'relative', zIndex: 2, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    {title}{' '}
                                    <Typography component="span" fontWeight="medium" color="gray">
                                        ({releaseYear})
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="gray" gutterBottom>
                                    {release_date || 'Unknown'} | {runtime || 'N/A'} minutes | Rating: {vote_average || 'N/A'} ({vote_count || 0} votes)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions disableSpacing sx={{ padding: 0, gap: 1 }}>
                                    <InteractiveButton content="Add to Favorites" icon={<FavoriteIcon />} color="#F02849" />
                                    <InteractiveButton content="Watch Later" icon={<WatchLaterIcon />} color="#FF8A65" />
                                    <InteractiveButton content="Like" icon={<ThumbUpIcon />} color="#1877F2" />
                                </CardActions>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    {genres && genres.length > 0 && (
                                        <DisplayArrayAttribute array={genres} prop="name" />
                                    )}
                                    <DisplaySingleAttribute attribute="Original Language"
                                        value={original_language ? (<CountryIconAsText country={original_language} />) : ("Not provided!")} />
                                    <DisplaySingleAttribute attribute="Status" value={status || 'N/A'} />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Overview
                                </Typography>
                                <Typography variant="body1" gutterBottom color="gray" textAlign="justify">
                                    {overview || 'No description available.'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

// Expected prop types
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
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        })),
    }).isRequired,
};

// Export MovieDetails component
export default MovieDetails;
