// Desc: Animated title component with decorative icons

// Import necessary modules
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Import icons
import { AutoAwesome } from "@mui/icons-material";

// AnimatedTitle Component - Displays an animated title with decorative icons
const AnimatedTitle = ({ title }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
            <motion.div
                initial={{ opacity: 0, y: -20 }} // Initial animation: fade-in from top
                animate={{ opacity: 1, y: 0 }} // Animate to visible state
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition effect
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                {/* Left rotating icon with animation */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, -15, 0] }} // Rotating effect back and forth
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <AutoAwesome sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: "#ff6f61" }} />
                </motion.div>

                {/* Animated text with gradient effect */}
                <motion.div
                    initial={{ scale: 0.8 }} // Starts slightly smaller
                    animate={{ scale: 1 }} // Expands to full size
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Smooth looping background gradient animation
                        style={{
                            background: "linear-gradient(90deg, #e50914, #ff6f61, #ffcc00, #e50914)", // Gradient colors
                            backgroundSize: "300% 100%", // Expands gradient for animation
                            WebkitBackgroundClip: "text", // Applies gradient to text only
                            WebkitTextFillColor: "transparent", // Makes text transparent to show gradient
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: "capitalize", // Capitalizes first letter of each word
                                fontWeight: "bold", // Bold text
                                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }, // Responsive font sizes
                                textAlign: "center", // Centers text
                                textShadow: "2px 2px 5px rgba(0,0,0,0.2)", // Adds subtle text shadow
                            }}
                        >
                            {title}
                        </Typography>
                    </motion.div>
                </motion.div>

                {/* Right rotating icon with animation */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -15, 15, 0] }} // Rotates in opposite direction
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <AutoAwesome sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: "#ff6f61" }} />
                </motion.div>
            </motion.div>
        </Box>
    );
};

// Export the AnimatedTitle component
export default AnimatedTitle;
