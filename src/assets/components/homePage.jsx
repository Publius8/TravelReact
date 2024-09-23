import React from 'react'
import '../css/style.css'
import OrderTable from './orderTable.jsx'
import Advert from './advert.jsx'
import ShushaImgBlock from './ShuhaImgBlock.jsx'
import ImageText from './ImageText.jsx'
import Tours from './Tours.jsx'
import TouristComment from './TouristComment.jsx'
import Blog from './Blog.jsx'


function HomePage() {
    return (
        <>
        <OrderTable />
        <div className='pleaseWork'></div>
        <Advert />
        <ShushaImgBlock />
        <ImageText />
        <Tours />
        <TouristComment />
        <Blog />
        </>
    )
}

export default HomePage