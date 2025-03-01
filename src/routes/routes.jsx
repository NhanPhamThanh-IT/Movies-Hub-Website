// Desc: Routes for the app

// Code for routing in the app
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import pages
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// Layout component
function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

// AppRoutes component
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout><HomePage /></Layout>}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </Router>
    );
}
