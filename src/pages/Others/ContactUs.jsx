// ContactUs Page Component

// Importing necessary modules
import React, { useState } from "react";
import {
    Container,
    Paper,
    Typography,
    Divider,
    Grid,
    Snackbar,
    IconButton
} from "@mui/material";
import { Close } from "@mui/icons-material";

// Importing custom components
import ContactInfo from "../../sections/ContactUs/ContactInfo";
import ContactForm from "../../sections/ContactUs/ContactForm";

const ContactUs = () => {
    const [open, setOpen] = useState(false);

    // Function to handle Snackbar close
    const handleClose = () => setOpen(false);

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E0E0E0",
                p: 4,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    bgcolor: "#1e1e1e",
                    p: 5,
                    borderRadius: 4,
                }}
            >
                {/* Page Title */}
                <Typography
                    variant="h4"
                    sx={{
                        color: "#e50914",
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 3
                    }}
                >
                    Contact Us
                </Typography>
                <Divider sx={{ bgcolor: "#e50914", mb: 3 }} />

                {/* Contact Sections */}
                <Grid container spacing={3}>
                    <ContactInfo />
                    <ContactForm setOpen={setOpen} />
                </Grid>
            </Paper>

            {/* Snackbar Notification */}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Message sent successfully!"
                action={
                    <IconButton size="small" color="inherit" onClick={handleClose}>
                        <Close fontSize="small" />
                    </IconButton>
                }
            />
        </Container>
    );
};

export default ContactUs;
