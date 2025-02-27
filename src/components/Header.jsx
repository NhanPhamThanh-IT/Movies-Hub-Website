// Desc: Create a header component with a logo, navigation menu, and authentication links

// Import necessary modules
import React from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";

// Header component
const Header = () => {
    const theme = useTheme(); // Access the theme for consistent spacing

    // Navigation menu items
    const menuItems = ["Home", "About", "Contact"];

    // Authentication-related items
    const authItems = ["Login", "Register"];

    return (
        <Box
            sx={{
                display: "flex", // Arrange items horizontally
                bgcolor: "black", // Set background color to black
                p: 2, // Apply padding for better spacing
                justifyContent: "space-between", // Distribute items evenly
                alignItems: "center", // Align items vertically
            }}
        >
            {/* Logo and main navigation menu */}
            <Box sx={{ display: "flex", gap: theme.spacing(4), alignItems: "center" }}>
                {/* Logo */}
                <Typography
                    variant="h4"
                    sx={{
                        color: "red", // Highlight logo in red
                        fontWeight: "bold", // Make text bold
                        textTransform: "uppercase", // Convert text to uppercase
                    }}
                >
                    Movie
                </Typography>

                {/* Navigation menu links */}
                {menuItems.map((item) => (
                    <Link
                        variant="body1"
                        key={item}
                        href="#"
                        sx={{
                            color: "white", // Set text color to white
                            fontWeight: "medium", // Apply medium font weight
                            textDecoration: "none", // Remove default underline
                            "&:hover": { color: "gray" }, // Change color on hover
                        }}
                    >
                        {item}
                    </Link>
                ))}
            </Box>

            {/* Authentication links (Login / Register) */}
            <Box sx={{ display: "flex", gap: theme.spacing(4), alignItems: "center" }}>
                {authItems.map((item) => (
                    <Link
                        variant="body1"
                        key={item}
                        href="#"
                        sx={{
                            color: "white", // Set text color to white
                            fontWeight: "medium", // Apply medium font weight
                            textDecoration: "none", // Remove default underline
                            "&:hover": { color: "gray" }, // Change color on hover
                        }}
                    >
                        {item}
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

// Export the Header component
export default Header;
