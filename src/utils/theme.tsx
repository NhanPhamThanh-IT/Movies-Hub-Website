import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        text: {
            primary: '#e50914',
            secondary: 'rgba(255, 255, 255, 0.8)',
        },
        background: {
            default: '#000',
            paper: '#000',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
