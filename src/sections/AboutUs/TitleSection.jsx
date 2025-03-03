// Desc: AboutUs Title Section

// Importing necessary components
import { Typography, Divider } from '@mui/material';

// Importing necessary static data
import data from '../../constants/AboutUs/titleSection';

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
            {data.title}
        </Typography>

        <Typography
            variant="h6"
            textAlign="justify"
            sx={{ maxWidth: "700px", mx: "auto", opacity: 0.8, fontSize: "1.1rem" }}
        >
            {data.desc}
        </Typography>

        <Divider sx={{ backgroundColor: "#e50914", my: 5, height: 3, width: "200px", mx: "auto" }} />
    </>
);

// Exporting TitleSection
export default TitleSection;