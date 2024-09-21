import React, { useState } from 'react';
import "../css/blog.css";
import BlogCard from './BlogCard'; // Ensure this path is correct

const blogCards = [
  { img: 'card-1.webp' },
  { img: 'card-2.webp' },
  { img: 'card-3.webp' },
  { img: "ready-summer-vacation-travel-background-d-rendering-114574299.webp" },
  { img: "Picture_2_Travel.jpeg" },
  { img: "ce-travel.jpg" },

];

function BlogSlider() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogCards.length / itemsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handlePageClick = (index) => {
    setCurrentIndex(index);
  };

  const currentCards = blogCards.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <>
      <div className="container max-w-[1200px] mx-auto h-[100%]">
        <div className="text-center pt-20">
          <span className="our-blog-txt text-2xl block mb-1 text-[#2A87CF]" style={{ fontFamily: '"Arizonia", cursive' }}>
            Bizim Blog
          </span>
          <h2 className="text-4xl font-semibold leading-relaxed mb-6">Son Post</h2>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px]">
          {currentCards.map((card, index) => (
            <BlogCard key={index} BlogCardImg={card.img} />
          ))}
        </div>

        <div className="pagination mt-[50px] flex items-center justify-center gap-[5px]">
          <button className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`rounded-full outline-none pg size-[40px] inline-flex items-center justify-center border ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </button>
          ))}
          <button className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border" onClick={handleNext}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogSlider;
