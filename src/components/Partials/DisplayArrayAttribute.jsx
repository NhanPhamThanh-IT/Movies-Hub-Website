import { Box, Chip, Paper, Typography } from '@mui/material';

const DisplayArrayAttribute = ({ label = "Label", array = [], prop = "name" }) => {
    return (
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
                {label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {array && array.length > 0 ? (
                    array.map((item, index) => (
                        <Chip
                            key={index}
                            label={item[prop]}
                            variant="outlined"
                            color="default"
                        />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        N/A
                    </Typography>
                )}
            </Box>
        </Paper>
    );
};

export default DisplayArrayAttribute;