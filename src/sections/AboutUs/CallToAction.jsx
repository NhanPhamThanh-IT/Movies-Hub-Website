// Desc: Call to action component for the about us page

// Importing necessary components
import { Box, Button, Typography } from "@mui/material";

// CallToAction component
const CallToAction = () => (
    <Box textAlign="center" mt={8}>
        <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: "1.5rem" }}
            color="textPrimary"
        >
            Join the MovieZone Experience Today!
        </Typography>
        <Typography
            variant="body1"
            sx={{ maxWidth: "600px", mx: "auto", mt: 2, opacity: 0.8, fontSize: "1.1rem" }}
        >
            Be a part of the most exciting movie streaming platform. Sign up now and dive into the world of entertainment.
        </Typography>
        <Button
            variant="contained"
            sx={{ mt: 4, backgroundColor: "#e50914", color: "white", px: 5, py: 1.5, fontSize: "1.1rem", "&:hover": { backgroundColor: "#b2070f" } }}>
            Get Started
        </Button>
    </Box>
);

// Exporting the CallToAction component
export default CallToAction;