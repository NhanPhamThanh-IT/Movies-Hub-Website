// Desc: AboutUs Title Section

// Importing necessary components
import { Typography, Divider } from '@mui/material';

// TitleSection component
const TitleSection = () => (
    <>
        <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4 }}
            color="text.primary"
        >
            About MovieZone
        </Typography>

        <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: "700px", mx: "auto", opacity: 0.8, fontSize: "1.1rem" }}
        >
            Welcome to MovieZone, your go-to platform for discovering and enjoying the best movies and TV shows.
            Our mission is to bring entertainment lovers together by providing an extensive collection of films
            and series for every taste.
        </Typography>

        <Divider sx={{ backgroundColor: "#e50914", my: 5, height: 3, width: "60px", mx: "auto" }} />
    </>
);

// Exporting TitleSection
export default TitleSection;