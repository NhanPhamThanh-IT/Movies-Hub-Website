// Desc: Optimized DisplayAttribute component

// Importing necessary dependencies
import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";

// DisplaySingleAttribute component
// This component is used to display a single attribute and its value
// It takes two props: attribute and value
// It returns a Box component with a Typography component for attribute and value
const DisplaySingleAttribute = ({ attribute, value }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="subtitle1" color="text.secondary">
                {attribute}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {value}
            </Typography>
        </Box>
    );
};

// Define the prop types for the DisplaySingleAttribute component
DisplaySingleAttribute.propTypes = {
    attribute: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

// Exporting DisplaySingleAttribute component
export default DisplaySingleAttribute;