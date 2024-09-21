import React, { useState } from "react";
import "../css/style.css";
import BlogCard from "./BlogCard";

function Blog() {
  const blogPosts = [
    { img: "card-1.webp" },
    { img: "card-2.webp" },
    { img: "card-3.webp" },
    { img: "ready-summer-vacation-travel-background-d-rendering-114574299.webp" },
    { img: "Picture_2_Travel.jpeg" },
    { img: "ce-travel.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePosts = 3; // Number of posts to display

  const totalPosts = blogPosts.length;
  const totalGroups = Math.ceil(totalPosts / visiblePosts);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the starting index for the visible posts
  const startIndex = currentIndex * visiblePosts;

  return (
    <div className="container max-w-[1200px] mx-auto h-[100%]">
      <div className="text-center pt-20">
        <span
          className="our-blog-txt text-2xl block mb-1 text-[#2A87CF]"
          style={{ fontFamily: '"Arizonia", cursive' }}
        >
          Bizim Blog
        </span>
        <h2 className="text-4xl font-semibold leading-relaxed mb-6">
          Son Post
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px]">
        {blogPosts.slice(startIndex, startIndex + visiblePosts).map((post, index) => (
          <div key={index} className="fade-in-animation"> {/* Add animation class here */}
            <BlogCard BlogCardImg={post.img} />
          </div>
        ))}
      </div>

      <div className="pagination mt-[50px] flex items-center justify-center gap-[5px]">
        <button
          className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border"
          onClick={() => handlePaginationClick((currentIndex - 1 + totalGroups) % totalGroups)}
        >
          <i className="fa-solid fa-angle-left" />
        </button>
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            className={`rounded-full outline-none pg size-[40px] inline-flex items-center justify-center border ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handlePaginationClick(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border"
          onClick={() => handlePaginationClick((currentIndex + 1) % totalGroups)}
        >
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
}

export default Blog;
