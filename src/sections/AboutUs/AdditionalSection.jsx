// Desc: Additional section of the About Us page

// Import necessary modules
import { Box, Grid, Typography } from "@mui/material";

// Import custom components
import FeatureCard from "../../components/AboutUs/FeatureCard";

// Import additional features data
import additionalFeatures from "../../constants/AboutUs/additionalFeatures";

// Additional feature card component
const AdditionalSection = () => (
    <Box
        mt={8}
    >
        <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "#e50914", mb: 4 }}
            fontWeight="bold"
        >
            Why Choose MovieZone?
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="stretch">
            {additionalFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} display="flex">
                    <FeatureCard {...feature} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

// Additional feature card component
export default AdditionalSection;