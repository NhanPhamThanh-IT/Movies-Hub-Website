import { API_BASE_URL } from '../api/config.js';
import { getOption } from '../api/options.js';

export const fetchMoviesByCategory = async (category, signal) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${category}?language=en-US`, {
            getOption,
            signal
        });

        if (!response.ok) throw new Error(`Failed to fetch ${category} movies`);

        const data = await response.json();
        return { data: data.results, error: null };
    } catch (error) {
        return { data: [], error: error.message };
    }
};
