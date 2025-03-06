// Desc: Animated Title Component

// Importing Required Libraries
import PropTypes from 'prop-types';
import { Typography, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { AutoAwesome } from "@mui/icons-material";

// Animated Title Component
const AnimatedTitle = ({ title }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3} width="100%">
            <Divider
                component={motion.div}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "20%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{ borderBottomWidth: 3, borderColor: "#ff6f61", mx: 2 }}
            />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <AutoAwesome sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: "#ff6f61" }} />
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{
                            background: "linear-gradient(90deg, #e50914, #ff6f61, #ffcc00, #e50914)",
                            backgroundSize: "300% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
                                textAlign: "center",
                                textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                            }}
                        >
                            {title}
                        </Typography>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <AutoAwesome sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: "#ff6f61" }} />
                </motion.div>
            </motion.div>
            <Divider
                component={motion.div}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "20%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{ borderBottomWidth: 3, borderColor: "#ff6f61", mx: 2 }}
            />
        </Box>
    );
};

// Typechecking Props for the Animated Title Component
AnimatedTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

// Exporting Animated Title Component
export default AnimatedTitle;
