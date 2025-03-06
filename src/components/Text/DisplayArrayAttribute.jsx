// Desc: Display array attribute with label and array of objects

// Import necessary modules
import PropTypes from 'prop-types';
import { Box, Chip, Typography } from '@mui/material';

// DisplayArrayAttribute component
const DisplayArrayAttribute = ({ label = "Label", array = [], prop = "name" }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {array && array.length > 0 ? (
                    array.map((item, index) => (
                        <Chip
                            key={index}
                            label={item[prop]}
                            variant="outlined"
                        />
                    ))
                ) : (
                    <Typography variant="subtitle1" color="text.secondary">
                        N/A
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

// Expected prop types
DisplayArrayAttribute.propTypes = {
    label: PropTypes.string.isRequired,
    array: PropTypes.array.isRequired,
    prop: PropTypes.string.isRequired,
};

// Default prop values
export default DisplayArrayAttribute;