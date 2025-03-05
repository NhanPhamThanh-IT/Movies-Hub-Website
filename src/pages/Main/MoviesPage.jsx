import { useState } from "react";
import { Container } from "@mui/material";
import MovieList from "../../sections/HomePage/MovieList";
import MovieSearch from "../../components/MoviesPage/MovieSearch";
import useMovies from "../../hooks/MoviesPage/useMovies";
import { MOVIE_CATEGORIES } from "../../constants/MoviesPage/movieCategories";

const MoviesPage = () => {
    const { movies, errors } = useMovies();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = Object.entries(movies).reduce((acc, [key, movieList]) => {
        acc[key] = movieList.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        return acc;
    }, {});

    return (
        <Container maxWidth="xl">
            <MovieSearch onSearch={setSearchTerm} />
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

export default MoviesPage;
