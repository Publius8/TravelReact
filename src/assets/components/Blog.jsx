import React from "react";
import "../css/style.css";
import BlogCard from "./BlogCard";


function Blog() {
  return (
    <div>
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
        <BlogCard BlogCardImg="card-1.webp" />
        <BlogCard BlogCardImg="card-2.webp" />
        <BlogCard BlogCardImg="card-3.webp" />
      </div>

      <div className="pagination mt-[50px] flex items-center justify-center gap-[5px]">
        <button className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border">
          <i className="fa-solid fa-angle-left" />
        </button>
        <button className="rounded-full outline-none pg active size-[40px] inline-flex items-center justify-center border">
          1
        </button>
        <button className="rounded-full outline-none pg  size-[40px] inline-flex items-center justify-center border">
          2
        </button>
        <button className="rounded-full outline-none pg  size-[40px] inline-flex items-center justify-center border">
          3
        </button>
        <button className="rounded-full outline-none pg  size-[40px] inline-flex items-center justify-center border">
          4
        </button>
        <button className="rounded-full outline-none pg  size-[40px] inline-flex items-center justify-center border">
          5
        </button>
        <button className="rounded-full outline-none size-[40px] inline-flex items-center justify-center border">
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>

    </div>
      
    </div>
    
  );
}

export default Blog;
