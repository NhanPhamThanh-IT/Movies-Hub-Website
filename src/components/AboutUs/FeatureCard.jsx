// Desc: Feature card component

// Import necessary modules
import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";

// Feature card component
const FeatureCard = ({ icon: Icon, title, desc }) => (
    <Box
        sx={{
            p: 4,
            borderRadius: 5,
            boxShadow: 3,
            backgroundColor: "#1a1a1a",
            border: "1px solid #e50914",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Icon size={50} color="#e50914" />
        <Typography
            variant="h6"
            fontWeight="bold"
            color="textPrimary"
            sx={{ mt: 2, fontSize: "1.2rem" }}
            textAlign={"center"}
        >
            {title}
        </Typography>
        <Typography
            variant="body2"
            sx={{ opacity: 0.8, mt: 1, fontSize: "1rem", flexGrow: 1 }}
            textAlign={"center"}
        >
            {desc}
        </Typography>
    </Box>
);

// Typechecking for the FeatureCard component
FeatureCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

// Export the FeatureCard component
export default FeatureCard;
