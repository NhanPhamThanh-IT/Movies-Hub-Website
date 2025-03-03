// Importing necessary libraries and tools
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing custom components

// Importing layouts
import Layout from "../components/Partials/Layout";

// Importing pages
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import TVShowsPage from "../pages/TVShowsPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

// Importing Error pages
import NotFoundPage from "../pages/NotFoundPage";

// Exporting the AppRoutes component
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/tv-shows" element={<TVShowsPage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
