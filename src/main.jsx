import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from '../src/assets/components/navbar.jsx'
import OrderTable from '../src/assets/components/orderTable.jsx'
import Advert from '../src/assets/components/advert.jsx'
import ShushaImgBlock from '../src/assets/components/ShuhaImgBlock.jsx'
import ImageText from '../src/assets/components/ImageText.jsx'
import Tours from '../src/assets/components/Tours.jsx'
import TouristComment from '../src/assets/components/TouristComment.jsx'
import Blog from '../src/assets/components/Blog.jsx'
import Footer from '../src/assets/components/Footer.jsx'
import './assets/css/index.css'
import ContactPage from "./assets/components/ContactPage.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Navbar />
    <OrderTable />
    <Advert />
    <ShushaImgBlock />
    <ImageText />
    <Tours />
    <TouristComment />
    <Blog />
    <Footer /> */}
    <ContactPage/>
  </StrictMode>,
)
