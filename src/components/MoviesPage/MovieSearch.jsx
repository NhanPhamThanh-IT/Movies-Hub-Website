import { TextField } from "@mui/material";

const MovieSearch = ({ onSearch }) => {
    return (
        <TextField
            fullWidth
            label="Search Movies"
            variant="outlined"
            margin="normal"
            onChange={(event) => onSearch(event.target.value.toLowerCase())}
        />
    );
};

export default MovieSearch;
