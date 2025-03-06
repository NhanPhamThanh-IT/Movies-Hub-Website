// Desc: Interactive button component

// Import necessary modules
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

// InteractiveButton component
// This component is a button that changes color when hovered
// It takes in three props:
// - content: the text content of the button
// - icon: the icon to be displayed on the button
// - color: the color of the button
const InteractiveButton = ({ content, icon, color }) => {
    return (
        <Button
            variant="outlined"
            startIcon={icon}
            size="small"
            sx={{
                backgroundColor: `${color}`,
                color: 'white',
                border: `1px solid ${color}`,
                '&:hover': {
                    color: { color },
                    border: `1px solid ${color}`,
                    backgroundColor: 'white'
                }
            }}
        >
            {content}
        </Button>
    );
};

// Define the prop types for the InteractiveButton component
InteractiveButton.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired
};

// Export the InteractiveButton component
export default InteractiveButton;