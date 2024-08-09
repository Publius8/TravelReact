import React from 'react'
import '../css/hotel.css'
import Navbar from './navbar.jsx'
import OrderTable from './orderTable.jsx'
import Tours from './Tours.jsx'
import Footer from './Footer.jsx'
import ImageText from './ImageText.jsx'

function HotelPage() {
    return (
        <>
        <Navbar />
        <OrderTable />
        <Tours />
        <ImageText />
        <Footer />
        </>
    )
}

export default HotelPage