// Desc: AboutUs page component
import React from "react";
import { Box, Container } from "@mui/material";

// Importing sections
import TitleSection from "../sections/AboutUs/TitleSection";
import FeaturesSection from "../sections/AboutUs/FeaturesSection";
import AdditionalSection from "../sections/AboutUs/AdditionalSection";
import CallToAction from "../sections/AboutUs/CallToAction";

// AboutUs page component
const AboutUs = () => {
    return (
        <Box
            sx={{ backgroundColor: "#1a1a1a", color: "#E0E0E0", minHeight: "100vh", pt: 4, pb: 6 }}
        >
            <Container
                maxWidth="lg"
            >
                {/* Title section */}
                <TitleSection />

                {/* Features section */}
                <FeaturesSection />

                {/* Additional section */}
                <AdditionalSection />

                {/* Call to action section */}
                <CallToAction />
            </Container>
        </Box>
    );
};

// Exporting AboutUs page component
export default AboutUs;
