import { useState } from "react";
import {
    Box,
    IconButton,
    Tooltip,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Grid,
    Typography,
    Paper,
} from "@mui/material";
import { Category, GridView, Search } from "@mui/icons-material";
import MoviesByCategory from "../../sections/MoviesPage/MoviesByCategory";
import MoviesGrid from "../../sections/MoviesPage/MoviesGrid";

const MainPage = () => {
    const [mode, setMode] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");

    return (
        <Box
            sx={{
                p: 3,
                background: "#000",
                minHeight: "100vh",
                color: "#fff",
            }}
        >
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, color: "#e50914" }}
            >
                Movie Explorer
            </Typography>

            <Paper sx={{ p: 3, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "16px", backdropFilter: "blur(10px)" }}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} sm={5} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Tìm kiếm phim..."
                            InputProps={{
                                startAdornment: <Search color="action" sx={{ mr: 1, color: "#fff" }} />,
                                sx: { color: "#fff" }
                            }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                input: { color: "#fff" },
                                fieldset: { borderColor: "#fff" },
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "8px"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "#fff" }}>Thể loại</InputLabel>
                            <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                label="Thể loại"
                                sx={{
                                    color: "#fff",
                                    fieldset: { borderColor: "#fff" },
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "8px"
                                }}
                            >
                                <MenuItem value="">Tất cả</MenuItem>
                                <MenuItem value="action">Hành động</MenuItem>
                                <MenuItem value="drama">Tâm lý</MenuItem>
                                <MenuItem value="comedy">Hài hước</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} textAlign="right">
                        <Tooltip title={mode === 1 ? "Grid View" : "Category View"}>
                            <IconButton
                                onClick={() => setMode(mode === 1 ? 2 : 1)}
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#e50914",
                                    borderRadius: "50%",
                                    transition: "0.3s",
                                    '&:hover': { backgroundColor: "#b20710" }
                                }}
                            >
                                {mode === 1 ? <GridView fontSize="large" /> : <Category fontSize="large" />}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Paper>

            <Box mt={3}>{mode === 1 ? <MoviesGrid /> : <MoviesByCategory />}</Box>
        </Box>
    );
};

export default MainPage;
