import { useState } from 'react';
import { Button, Box } from '@mui/material';
import MoviesByCategory from '../../sections/MoviesPage/MoviesByCategory';
import MoviesGrid from '../../sections/MoviesPage/MoviesGrid';

const MainPage = () => {
    const [mode, setMode] = useState(1);

    return (
        <Box sx={{ textAlign: 'center', p: 3 }}>
            <Button variant="contained" onClick={() => setMode(mode === 1 ? 2 : 1)}>
                Toggle Mode
            </Button>
            {mode === 1 ? <MoviesByCategory /> : <MoviesGrid />}
        </Box>
    );
};

export default MainPage;
