// Desc: Footer component for the website

// Import necessary modules
import PropTypes from 'prop-types';
import { Grid, Typography, Link, Box, Divider } from "@mui/material";
import {
    Facebook, Twitter, Instagram, Youtube,
    Clapperboard, Tv,
    Home, Info, LifeBuoy,
    Mail, Phone, MapPin
} from "lucide-react";
import { Movie } from '@mui/icons-material';

// Section component
const Section = ({ title, children }) => (
    <Grid item xs={12} sm={6} md={4} lg={3} textAlign={{ xs: "center", md: "left" }}>
        <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ color: "#e50914", fontWeight: "bold", mb: 1 }}>{title}</Typography>
            <Box component="hr" sx={{ border: 0, height: 2, bgcolor: "#e50914", mb: 2 }} />
            {children}
        </Box>
    </Grid>
);

// MovieZone component
const MovieZone = () => (
    <Section title="MovieZone">
        <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 280, mx: { xs: "auto", md: "0" } }} textAlign="justify">
            Discover an incredible world of movies and TV shows with thousands of top-rated films and exclusive series. Enjoy unlimited entertainment anytime, anywhere!
        </Typography>
    </Section>
);

// Product component
const Product = () => (
    <Section title="Products">
        {[{ icon: Clapperboard, label: "Movies" }, { icon: Tv, label: "TV Shows" }].map(({ icon: Icon, label }, i) => (
            <Link key={i} href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                <Icon size={16} /> {label}
            </Link>
        ))}
    </Section>
);

// QuickLinks component
const QuickLinks = () => (
    <Section title="Quick Links">
        {[
            { icon: Home, label: "Home", link: "/home" },
            { icon: Info, label: "About Us", link: "/about-us" },
            { icon: LifeBuoy, label: "Support", link: "/support" }
        ].map(({ icon: Icon, label, link }, i) => (
            <Link
                key={i}
                href={link}
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}
            >
                <Icon size={16} /> {label}
            </Link>
        ))}
    </Section>
);

// Contact component
const Contact = () => (
    <Section title="Contact">
        {[{ icon: Mail, text: "support@moviezone.com" }, { icon: Phone, text: "+1 234 567 890" }, { icon: MapPin, text: "123 Movie St, Hollywood, CA" }].map(({ icon: Icon, text }, i) => (
            <Typography key={i} variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, opacity: 0.8 }}>
                <Icon size={16} /> {text}
            </Typography>
        ))}
    </Section>
);

// Social media component
const SocialMedia = () => (
    <Grid item xs={12} textAlign="center">
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Link key={index} href="#" color="inherit" sx={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "2px solid #ddd", "&:hover": { backgroundColor: "white", color: "black" } }}>
                    <Icon size={16} />
                </Link>
            ))}
        </Box>
    </Grid>
);

// Footer component
const Footer = () => (
    <Box sx={{ backgroundColor: "#121212", color: "white", mt: 4 }}>

        <Grid container spacing={4} justifyContent="center">
            <MovieZone />
            <Product />
            <QuickLinks />
            <Contact />
        </Grid>

        <Divider sx={{ backgroundColor: "gray", mt: 3, mb: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, pb: 2, px: 2 }}>
            <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} MovieZone. All Rights Reserved.
            </Typography>
            <SocialMedia />
        </Box>
    </Box>
);

// Define prop types for all components
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

MovieZone.propTypes = {};
Product.propTypes = {};
QuickLinks.propTypes = {};
Contact.propTypes = {};
SocialMedia.propTypes = {};

// Export the Footer component
export default Footer;