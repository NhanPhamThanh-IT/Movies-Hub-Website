//Desc: ContactForm component to render the form fields

// Import necessary modules
import React, { useState } from "react";
import { Grid, Box, TextField, Button } from "@mui/material";

// ContactForm component to render the form fields
const ContactForm = ({ setOpen }) => {
    // State to track the currently focused input field
    const [focusedField, setFocusedField] = useState(null);

    // Function to handle input field focus
    const handleFocus = (field) => {
        setFocusedField(field);
    };

    // Function to handle input field blur
    const handleBlur = () => {
        setFocusedField(null);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setOpen(true); // Open the modal or perform any other action
    };

    return (
        <Grid item xs={12} md={6}> {/* Responsive Grid item: full width on small screens, half width on medium screens */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2.8 }} // Styling the form container
            >
                {/* Array of input labels, dynamically mapped to create TextFields */}
                {["Your Name", "Your Email", "Phone Number", "Subject", "Your Message"].map((label, index) => (
                    <TextField
                        key={index} // Unique key for each field
                        fullWidth // Ensures the field takes full width
                        label={label} // Label text
                        variant="outlined" // Material UI variant style
                        required // Makes the field mandatory
                        multiline={label === "Your Message"} // Allows multiline input for message field
                        rows={label === "Your Message" ? 4 : undefined} // Sets rows for message field
                        onFocus={() => handleFocus(label)} // Handles focus event
                        onBlur={handleBlur} // Handles blur event
                        sx={{
                            bgcolor: "#222831", // Background color of the input field
                            borderRadius: "8px", // Rounded corners
                            "& label": {
                                color: "#E0E0E0", // Label color in normal state
                            },
                            "& label.Mui-focused": {
                                color: "#E0E0E0", // Label color when focused
                            },
                            color: "#E0E0E0", // Text color
                        }}
                        InputProps={{
                            style: { color: "#E0E0E0" }, // Styling the input text color
                        }}
                    />
                ))}

                {/* Submit Button */}
                <Button
                    type="submit" // Triggers form submission
                    fullWidth // Takes full width of the parent container
                    variant="contained" // Material UI button variant
                    sx={{
                        bgcolor: "#e50914", // Background color of the button
                        color: "white", // Text color
                        fontWeight: "bold", // Makes text bold
                        borderRadius: "8px", // Rounded corners
                        textTransform: "uppercase", // Converts text to uppercase
                        ':hover': { bgcolor: "#b20710" }, // Button color on hover
                    }}
                >
                    Send Message
                </Button>
            </Box>
        </Grid>
    );
};

// Export the ContactForm component
export default ContactForm;
