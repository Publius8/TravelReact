import React from 'react';
import '../css/style.css';
import CommentBox from './CommentBox'

function TouristComment() {
    return (
<div
  className="mt-20 flex flex-col items-center justify-center min-h-[800px] bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      'url("pexels-george-ketselashvili-228925-746716.jpg")'
  }}
>
  <div className="text-center">
    <p className="our-blog-txt text-white text-3xl mb-3" style={{ fontFamily: '"Arizonia", cursive' }}>Rəy</p>
    <p className="font-poppins text-white text-5xl font-semibold mb-10">
      Turist Rəyləri
    </p>
  </div>
  <div
    id="slider-container"
    className="flex flex-wrap lg:flex-nowrap justify-center gap-4 w-full max-w-[1200px] mx-auto mb-5"
  >

  <CommentBox ProfileImg="bridge.jpg" Name="Ali" />
  <CommentBox ProfileImg="bridge.jpg" Name="Bob" />
  <CommentBox ProfileImg="bridge.jpg" Name="Vladimir" />

  </div>

  <div className="flex gap-2">
    <button className="w-[10px] h-[10px] rounded-full bg-[#2A87CF]" id="prev" />
    <button className="w-[10px] h-[10px] rounded-full bg-[#D7D7D7]" id="next" />
  </div>
</div>

    )
}

export default TouristComment