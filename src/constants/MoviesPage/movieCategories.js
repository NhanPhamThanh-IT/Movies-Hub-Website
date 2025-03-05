export const API_BASE_URL = "https://api.themoviedb.org/3/movie";

export const MOVIE_CATEGORIES = {
    nowPlaying: "now_playing",
    upcoming: "upcoming",
    popular: "popular",
    topRated: "top_rated"
};

export const INITIAL_STATE = {
    movies: { nowPlaying: [], upcoming: [], popular: [], topRated: [] },
    errors: { nowPlaying: null, upcoming: null, popular: null, topRated: null }
};
