// Desc: SearchBar component for searching movies

// Importing necessary modules
import PropTypes from 'prop-types';
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { LuScanSearch } from "react-icons/lu";

// Define SearchBar component
const SearchBar = ({ onSearch }) => (
    <TextField
        fullWidth
        label="Search Movies"
        variant="outlined"
        margin="normal"
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton edge="end" sx={{ p: 0 }}>
                        <Box
                            sx={{
                                mr: 1,
                                p: 1,
                                bgcolor: "#ff6f61",
                                borderRadius: "50%",
                                transition: "0.3s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                '&:hover': { bgcolor: "#e65b50" }
                            }}
                        >
                            <LuScanSearch style={{ color: "white", fontSize: 25 }} />
                        </Box>
                    </IconButton>
                </InputAdornment>
            ),
            sx: {
                color: "white",
                borderRadius: "8px",
                fontWeight: 500,
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ff6f61' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ff6f61' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ff6f61' }
            }
        }}
        InputLabelProps={{
            sx: {
                color: "#888",
                '&.Mui-focused': { color: "#ff6f61", fontWeight: "bold" }
            }
        }}
    />
);

// Define prop types for SearchBar component
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

// Export the SearchBar component
export default SearchBar;
