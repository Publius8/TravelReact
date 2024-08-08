import React from 'react';
import '../css/style.css';
import TourCard from './TourCard'

function Tours() {
    return (

  <div className="container mx-auto max-w-[1200px] mt-16 py-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Tur Təyinat Yeri
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
     <TourCard imageSrc="home'.jpg" />
     <TourCard imageSrc="home2 (2).jpg" />
     <TourCard imageSrc="home3.jpg" />
     <TourCard imageSrc="home'.jpg" />
     <TourCard imageSrc="home2 (2).jpg" />
     <TourCard imageSrc="home3.jpg" />
    </div>

  <div className="items-center justify-center flex mx-auto m-32 ">
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        &lt;
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A87CF]  active text-white">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        3
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        4
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        5
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200">
        &gt;
      </button>
    </div>
  </div>

</div>
    )
}

export default Tours