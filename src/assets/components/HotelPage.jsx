import React from 'react'
import '../css/hotel.css'
import OrderTable from './orderTable.jsx'
import Tours from './Tours.jsx'
import ImageText from './ImageText.jsx'

function HotelPage() {
    return (
        <>
        <OrderTable />
        <Tours />
        <ImageText />
        </>
    )
}

export default HotelPage