import React from 'react';
import '../css/style.css';

function BlogCard({BlogCardImg}) {
    return (
        <div className="relative ">
        <figure className="relative h-[270px] z-[1]">
          <a href="#" className="absolute inset-0" />
          <img
            loading="lazy"
            src={BlogCardImg}
            className="size-full object-cover"
            alt=""
          />
        </figure>
        <div className="z-[1] before:size-0 before:right-[-7px] before:border-l-[7px] before:border-t-[7px] before:border-l-[#6DA4CD] before:border-r-transparent before:border-b-transparent before:border-t-transparent before:absolute  before:top-0 after:size-[0] after:left-[-7px] after:border-l-[7px] after:border-b-[7px] after:absolute after:top-0 after:border-b-[#6DA4CD] after:border-t-transparent after:border-r-transparent after:border-l-transparent flex items-center absolute bg-[#6DA4CD] w-[140px] top-[-7px] left-[20px] px-[15px] py-[5px]">
          <div className="w-[55px]">
            <span className="day text-[50px] text-white font-light leading-[1]">
              11
            </span>
          </div>
          <div className="w-[calc(100%_-_55px)] text-white">
            <span className="year block text-[13px] leading-[1.4]">2024</span>
            <span className="month block text-[13px] leading-[1.4]">İyul</span>
          </div>
        </div>
        <div className=" relative text p-[20px] w-[90%] mt-[-40px] bg-white mx-auto shadow shadow-lg z-[2]">
          <h3 className="text-[19px] mb-[16px] transition-all font-semibold hover:text-[#6DA4CD] ">
            <a href="#">Bu Dünyanın Ən Populyar Yeri</a>
          </h3>
          <p className="text-[#999] mb-[16px]">
            Onların yerindən Düden adlı kiçik bir çay axır və onu lazımi
            regelialiya ilə təmin edir.
          </p>
          <a
            href="./destination.html"
            className="bg-[#6DA4CD] text-white rounded-[4px] px-[10px] h-[40px] leading-[24px] inline-flex justify-center items-center"
          >
            Daha ətraflı
          </a>
        </div>
      </div>
    )
}

export default BlogCard