// Desc: Additional section of the About Us page

// Import necessary modules
import { Box, Grid, Typography } from "@mui/material";
import { Globe, Calendar, Video, MessageSquare } from "lucide-react";

// Import custom components
import FeatureCard from "../../components/AboutUs/FeatureCard";

// Additional feature card component
const AdditionalSection = () => {
    const additionalFeatures = [
        { icon: Globe, title: "Global Access", desc: "Stream movies from anywhere in the world, anytime." },
        { icon: Calendar, title: "Daily Updates", desc: "New content added every day to keep you entertained." },
        { icon: Video, title: "High Quality Streaming", desc: "Enjoy movies in Full HD and 4K resolution." },
        { icon: MessageSquare, title: "Interactive Community", desc: "Engage in discussions and reviews with other movie lovers." }
    ];

    return (
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
};

// Additional feature card component
export default AdditionalSection;