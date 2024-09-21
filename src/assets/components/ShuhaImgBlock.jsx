import React, { useState } from 'react';
import '../css/style.css';

function ShushaImgBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { image: 'qax.jpg', title: 'Qax', tours: '3 tur' },
    { image: 'goygol.jpg', title: 'Göygöl', tours: '3 tur' },
    { image: 'azedu.az_lacin_886.jpg', title: 'Laçın', tours: '3 tur' },
    { image: '64fd7763-9945-48bd-aa12-0129c912864d.jpg', title: 'Şuşa', tours: '3 tur' },
    { image: 'qax.jpg', title: 'Qax', tours: '3 tur' },
    { image: 'goygol.jpg', title: 'Göygöl', tours: '3 tur' },
    { image: 'azedu.az_lacin_886.jpg', title: 'Laçın', tours: '3 tur' },
    { image: '64fd7763-9945-48bd-aa12-0129c912864d.jpg', title: 'Şuşa', tours: '3 tur' },
    
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentCards = cards.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <div className="flex flex-col items-center justify-center min-h-[800px] bg-[#FAFAFA]">
      {/* Headings */}
      <div>
        <p className="our-blog-txt text-center text-[#2A87CF] text-3xl mb-3" style={{ fontFamily: '"Arizonia", cursive' }}>
          Sakit Dəniz Təklif Edən Məkanlar
        </p>
        <p className="font-poppins text-center text-[#323232] text-5xl font-semibold mb-10">
          Təyinat Yerini Seçin
        </p>
      </div>
      <div id="slider-container" className="flex items-center justify-center w-full max-w-[1200px] mx-auto">
        <div id="slider-track" className="w-full transition-transform ease-in-out duration-300">
          <div className="flex flex-wrap justify-center mb-5 gap-[20px]">
            {currentCards.map((card, index) => (
              <div key={index} className="flex relative w-full sm:w-1/2 md:w-1/3 lg:flex-1 mb-4">
                <div className="w-full h-[300px]">
                  <a href="#">
                    <img loading="lazy" className="w-full h-full object-cover rounded-lg" src={card.image} alt={card.title} />
                  </a>
                </div>
                <div className="absolute top-0 left-3">
                  <div className="z-[1] before:size-0 before:right-[-7px] before:border-l-[7px] before:border-t-[7px] before:border-l-[#6DA4CD] before:border-r-transparent before:border-b-transparent before:border-t-transparent before:absolute before:top-0 after:size-[0] after:left-[-7px] after:border-l-[7px] after:border-b-[7px] after:absolute after:top-0 after:border-b-[#6DA4CD] after:border-t-transparent after:border-r-transparent after:border-l-transparent flex items-center absolute bg-[#6DA4CD] top-[-7px] left-[20px] px-[15px] py-[5px]">
                    <span className="text-white font-bold text-lg h-8">{card.title}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-0 bg-[#6DA4CD] p-2 rounded-l-full">
                  <p className="text-white font-bold">{card.tours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Controls */}
      {/* <div className="flex gap-2 mt-4">
        <button className="w-[10px] h-[10px] rounded-full bg-[#2A87CF] transition-all duration-300 hover:bg-[#1F5F8C]" onClick={handlePrev} />
        <button className="w-[10px] h-[10px] rounded-full bg-[#D7D7D7] transition-all duration-300 hover:bg-[#B0B0B0]" onClick={handleNext} />
      </div> */}
    </div>
  );
}

export default ShushaImgBlock;
