// Desc: Features section of the About Us page

// Import necessary modules
import { Grid } from "@mui/material";

// Import necessary custom components
import FeatureCard from "../../components/AboutUs/FeatureCard";

// Import necessary constants
import features from "../../constants/AboutUs/features";

// Features section component
const FeaturesSection = () => (
    <Grid container spacing={5} justifyContent="center" alignItems="stretch">
        {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} display="flex">
                <FeatureCard {...feature} />
            </Grid>
        ))}
    </Grid>
);

// Export the FeaturesSection component
export default FeaturesSection;