import { API_BASE_URL } from "../../constants/MoviesPage/movieCategories";

export const fetchMoviesByCategory = async (category, signal) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${category}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            },
            signal
        });

        if (!response.ok) throw new Error(`Failed to fetch ${category} movies`);

        const data = await response.json();
        return { data: data.results, error: null };
    } catch (error) {
        return { data: [], error: error.message };
    }
};
