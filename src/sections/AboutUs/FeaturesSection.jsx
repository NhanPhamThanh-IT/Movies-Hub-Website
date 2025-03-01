// Desc: Features section of the About Us page

// Import necessary modules
import { Grid } from "@mui/material";
import { Film, Users, Star, Clapperboard, Play, Award, Eye, Heart } from "lucide-react";

// Import necessary custom components
import FeatureCard from "../../components/AboutUs/FeatureCard";

// Features section component
const FeaturesSection = () => {
    const features = [
        { icon: Film, title: "Vast Collection", desc: "Explore thousands of movies across all genres, from action to drama." },
        { icon: Clapperboard, title: "Exclusive Content", desc: "Enjoy exclusive and original series available only on MovieZone." },
        { icon: Star, title: "Top Ratings", desc: "Discover top-rated films curated by industry experts and movie lovers alike." },
        { icon: Users, title: "Community Driven", desc: "Join a community of movie enthusiasts and share your reviews." },
        { icon: Play, title: "Instant Streaming", desc: "Watch your favorite movies anytime, anywhere with high-quality streaming." },
        { icon: Award, title: "Award-Winning Films", desc: "Experience the best award-winning movies in our exclusive collection." },
        { icon: Eye, title: "New Releases", desc: "Stay updated with the latest blockbuster movies and trending series." },
        { icon: Heart, title: "Personalized Recommendations", desc: "Get tailored movie suggestions based on your watch history and preferences." }
    ];

    return (
        <Grid container spacing={5} justifyContent="center" alignItems="stretch">
            {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} display="flex">
                    <FeatureCard {...feature} />
                </Grid>
            ))}
        </Grid>
    );
};

// Export the FeaturesSection component
export default FeaturesSection;