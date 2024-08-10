import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from '../src/assets/components/navbar.jsx';
import Footer from '../src/assets/components/Footer.jsx';
import './assets/css/index.css';

import HomePage from "./assets/components/HomePage.jsx";
import ContactPage from "./assets/components/ContactPage.jsx";
import BlogPage from "./assets/components/BlogPage.jsx";
import HotelPage from "./assets/components/HotelPage.jsx";
import AboutUsPage from "./assets/components/AboutUsPage.jsx";
import PlacePage from "./assets/components/PlacePage.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/places" element={<PlacePage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
