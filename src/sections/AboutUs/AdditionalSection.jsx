// Desc: Additional section of the About Us page

// Import necessary modules
import { Box, Grid, Typography } from "@mui/material";
import { Globe, Calendar, Video, MessageSquare } from "lucide-react";

// Additional feature card component
const AdditionalSection = () => {
    const additionalFeatures = [
        { icon: Globe, title: "Global Access", desc: "Stream movies from anywhere in the world, anytime." },
        { icon: Calendar, title: "Daily Updates", desc: "New content added every day to keep you entertained." },
        { icon: Video, title: "High Quality Streaming", desc: "Enjoy movies in Full HD and 4K resolution." },
        { icon: MessageSquare, title: "Interactive Community", desc: "Engage in discussions and reviews with other movie lovers." }
    ];

    return (
        <Box mt={8}>
            <Typography variant="h4" textAlign="center" sx={{ color: "#e50914", mb: 4 }}>
                Why Choose MovieZone?
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {additionalFeatures.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </Grid>
        </Box>
    );
};

// Additional feature card component
export default AdditionalSection;