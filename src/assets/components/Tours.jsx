import React, { useState } from 'react';
import '../css/style.css';
import TourCard from './TourCard';

function Tours() {
  const cards = [
    "image-3-1024x523-1.jpg",
    "vila-monte-farm-house-bannerimg_7770-min.jpg",
    "vila-do-ouro-pool-terrace.jpg",
    "centro-cultural-antonio-aleixo-vila-real-de-santo-antonio.jpg",
    "5q9a2592.webp",
    "home3.jpg",
    "home'.jpg",
    "home2 (2).jpg",
    "home3.jpg",
    "home'.jpg",
    "home2 (2).jpg",
    "home3.jpg",
    // Add more images as needed
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const currentCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto max-w-[1200px] mt-16 py-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Tur Təyinat Yeri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {currentCards.map((imageSrc, index) => (
          <TourCard key={index} imageSrc={imageSrc} />
        ))}
      </div>

      <div className="items-center justify-center flex mx-auto m-32">
        <div className="flex items-center justify-center space-x-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                currentPage === index + 1 ? 'bg-[#2A87CF] text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tours;
