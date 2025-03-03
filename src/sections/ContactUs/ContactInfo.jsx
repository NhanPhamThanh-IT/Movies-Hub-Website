// Desc: ContactInfo component to display the map and contact details

// Importing necessary react components
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Importing necessary MUI components
import { Grid, Box, Typography, Paper } from "@mui/material";
import { Email, Phone, LocationOn, AccessTime } from "@mui/icons-material";

// Importing the contact data
import data from "../../constants/ContactUs/ContactInfo";

// Component to display each contact detail with an icon
const ContactDetail = ({ icon, text }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        {icon}
        <Typography variant="body1" sx={{ color: "#E0E0E0" }}>{text}</Typography>
    </Box>
);

// Component to display the map with location marker
const ContactMap = () => (
    <Box sx={{ width: "100%", height: 300, borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
        <MapContainer center={data.position} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={data.position}>
                <Popup>{data.address}</Popup>
            </Marker>
        </MapContainer>
    </Box>
);

// Main ContactInfo component to display the map and contact details
const ContactInfo = () => (
    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Display the contact location on a map */}
        <ContactMap />

        {/* Contact details wrapped inside a Paper component for better visibility */}
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: "#222831", color: "#E0E0E0" }}>
            {[
                { icon: <Email sx={{ color: "#ff6b6b" }} />, text: data.email },
                { icon: <Phone sx={{ color: "#feca57" }} />, text: data.phone },
                { icon: <LocationOn sx={{ color: "#48dbfb" }} />, text: data.address },
                { icon: <AccessTime sx={{ color: "#1dd1a1" }} />, text: data.workingHours }
            ].map((item, index) => (
                <ContactDetail key={index} icon={item.icon} text={item.text} />
            ))}
        </Paper>
    </Grid>
);

// Exporting the ContactInfo component
export default ContactInfo;
