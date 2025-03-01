import React from "react";
import { Container, Grid, Typography, Link, Box, Divider, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Movie, Tv, Home, ContactMail, Info, Support, Email, Phone, LocationOn } from "@mui/icons-material";

// Reusable Section Component
const Section = ({ title, children }) => (
    <Grid item xs={12} sm={6} md={4} lg={3} textAlign={{ xs: "center", md: "left" }}>
        <Typography variant="h6" sx={{ color: "#e50914", fontWeight: "bold", mb: 2 }}>
            {title}
        </Typography>
        {children}
    </Grid>
);

// Footer Component
const Footer = () => (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5, mt: 4 }}>
        <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
                {/* MovieZone Info */}
                <Section title="MovieZone">
                    <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: "280px", mx: { xs: "auto", md: "0" } }}>
                        Your ultimate destination for the best movies and TV shows. Watch, explore, and enjoy!
                    </Typography>
                </Section>

                {/* Products */}
                <Section title="Products">
                    <Stack spacing={1}>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <Movie fontSize="small" /> Movies
                        </Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <Tv fontSize="small" /> TV Shows
                        </Link>
                    </Stack>
                </Section>

                {/* Quick Links */}
                <Section title="Quick Links">
                    <Stack spacing={1}>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <Home fontSize="small" /> Home
                        </Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <ContactMail fontSize="small" /> Contact Us
                        </Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <Info fontSize="small" /> About Us
                        </Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                            <Support fontSize="small" /> Support
                        </Link>
                    </Stack>
                </Section>

                {/* Contact */}
                <Section title="Contact">
                    <Stack spacing={1} sx={{ opacity: 0.8 }}>
                        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Email fontSize="small" /> support@moviezone.com
                        </Typography>
                        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Phone fontSize="small" /> +1 234 567 890
                        </Typography>
                        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <LocationOn fontSize="small" /> 123 Movie St, Hollywood, CA
                        </Typography>
                    </Stack>
                </Section>
            </Grid>

            {/* Divider */}
            <Divider sx={{ backgroundColor: "gray", my: 3 }} />

            {/* Social Media */}
            <Grid item xs={12} textAlign="center">
                <Typography variant="h6" sx={{ color: "#e50914", fontWeight: "bold", mb: 2 }}>Follow Us</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <Link href="#" color="inherit"><Facebook fontSize="large" /></Link>
                    <Link href="#" color="inherit"><Twitter fontSize="large" /></Link>
                    <Link href="#" color="inherit"><Instagram fontSize="large" /></Link>
                    <Link href="#" color="inherit"><YouTube fontSize="large" /></Link>
                </Box>
            </Grid>

            {/* Copyright */}
            <Typography variant="body2" align="center" sx={{ opacity: 0.7, mt: 3 }}>
                &copy; {new Date().getFullYear()} MovieZone. All Rights Reserved.
            </Typography>
        </Container>
    </Box>
);

export default Footer;
