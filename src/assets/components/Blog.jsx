import React from 'react';
import '../css/style.css';
import BlogCard from './BlogCard';

function Blog() {
    return (
        <div className="container max-w-[1200px] mx-auto h-[100%] mb-[150px]">
  <div className="text-center pt-20">
    <span className="our-blog-txt text-2xl block mb-1 text-[#2A87CF]" style={{ fontFamily: '"Arizonia", cursive' }}>
      Bizim Blog
    </span>
    <h2 className="text-4xl font-semibold leading-relaxed mb-6">Son Post</h2>
  </div>
  <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px]">
  
    <BlogCard BlogCardImg="card-1.webp" />
    <BlogCard BlogCardImg="card-2.webp" />
    <BlogCard BlogCardImg="card-3.webp" />
  
  </div>
</div>

    )
}

export default Blog