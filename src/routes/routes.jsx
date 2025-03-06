// Importing necessary libraries and tools
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing custom components

// Importing layouts
import Layout from "../components/Layout/Index";

// Importing main pages
import HomePage from "../pages/Main/HomePage";
import MoviesPage from "../pages/Main/MoviesPage";

// Importing others pages
import AboutUs from "../pages/Others/AboutUs";
import ContactUs from "../pages/Others/ContactUs";

// Importing Error pages
import NotFoundPage from "../pages/Errors/404";

// Exporting the AppRoutes component
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
