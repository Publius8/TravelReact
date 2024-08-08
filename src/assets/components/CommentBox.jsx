import React from 'react';
import '../css/style.css';

function CommentBox({ProfileImg, Name}) {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3  mb-4">
        <div className="bg-white px-9 py-6 rounded-md">
          <i className="bx bxs-star text-[#2A87CF]" />
          <i className="bx bxs-star text-[#2A87CF]" />
          <i className="bx bxs-star text-[#2A87CF]" />
          <i className="bx bxs-star text-[#2A87CF]" />
          <i className="bx bxs-star text-[#2A87CF]" />
          <p className="my-6 text-[#9C9C9C] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nihil
            amet atque accusantium nesciunt tempore distinctio dicta omnis
            ratione. Laudantium?
          </p>
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] object-cover">
              <img
                loading="lazy"
                className="w-full h-full rounded-r-full rounded-bl-full"
                src={ProfileImg}
              />
            </div>
            <div className="flex flex-col text-lg">
              <p className="text-black">{Name}</p>
              <p className="text-[#6DA4CD]">müştəri</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CommentBox