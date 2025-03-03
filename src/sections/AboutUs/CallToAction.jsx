// Desc: Call to action component for the about us page

// Import necessary modules
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

// Importing static data
import data from "../../constants/AboutUs/callToAction";

// CallToAction component
const CallToAction = () => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => navigate("/"), [navigate]);

    return (
        <Box textAlign="center" mt={8}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.5rem" }} color="textPrimary">
                {data.title}
            </Typography>
            <Typography
                variant="body1"
                sx={{ maxWidth: 600, mx: "auto", mt: 2, opacity: 0.8, fontSize: "1.1rem" }}
            >
                {data.desc}
            </Typography>
            <Button
                variant="contained"
                sx={{
                    mt: 4,
                    backgroundColor: "#e50914",
                    color: "white",
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "#b20710" },
                }}
                onClick={handleNavigate}
            >
                <Typography
                    fontWeight="bold"
                >
                    {data.btnText}
                </Typography>
            </Button>
        </Box>
    );
};

// Exports the CallToAction component
export default CallToAction;
