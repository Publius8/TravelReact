import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Navbar from '../src/assets/components/navbar.jsx'
import Footer from '../src/assets/components/Footer.jsx'
import './assets/css/index.css'
import HomePage from "./assets/components/homePage.jsx"
import ContactPage from "./assets/components/ContactPage.jsx"
import BlogPage from "./assets/components/BlogPage.jsx"
import HotelPage from "./assets/components/HotelPage.jsx"
import AboutUsPage from "./assets/components/AboutUsPage.jsx"
import PlacePage from "./assets/components/PlacePage.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <HomePage /> */}
    {/* <AboutUsPage /> */}
    {/* <PlacePage /> */}
    {/* <HotelPage /> */}
    {/* <BlogPage /> */}
    <ContactPage/>
    <Footer />
  </StrictMode>,
)
