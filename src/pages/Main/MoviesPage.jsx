// Desc: MoviesPage component

// Importing necessary modules
import { useState } from "react";
import { Container } from "@mui/material";

// Importing custom components
import MovieList from "../../sections/Partials/MovieList";
import SearchBar from "../../components/Partials/SearchBar";

// Importing custom hooks
import useMovies from "../../hooks/MoviesPage/useMovies";

// Importing constants
import { MOVIE_CATEGORIES } from "../../constants/MoviesPage/movieCategories";

// MoviesPage component
const MoviesPage = () => {
    const { movies, errors } = useMovies();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = Object.entries(movies).reduce((acc, [key, movieList]) => {
        acc[key] = movieList.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        return acc;
    }, {});

    return (
        <Container maxWidth="xl">
            <SearchBar onSearch={setSearchTerm} />
            {Object.entries(MOVIE_CATEGORIES).map(([key, _]) => (
                <MovieList
                    key={key}
                    title={key.replace(/([A-Z])/g, " $1").trim()}
                    list_movies={filteredMovies[key]}
                    error={errors[key]}
                />
            ))}
        </Container>
    );
};

// Exporting MoviesPage component
export default MoviesPage;
