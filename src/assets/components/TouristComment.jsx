import React, { useState, useEffect } from 'react';
import '../css/style.css';
import CommentBox from './CommentBox';

function TouristComment() {
  const comments = [
    { ProfileImg: 'bridge.jpg', Name: 'Ali' },
    { ProfileImg: 'bridge.jpg', Name: 'Bob' },
    { ProfileImg: 'bridge.jpg', Name: 'Vladimir' },
    { ProfileImg: 'bridge.jpg', Name: 'Anna' },
    { ProfileImg: 'bridge.jpg', Name: 'John' },
    { ProfileImg: 'bridge.jpg', Name: 'Sarah' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < comments.length ? prevIndex + visibleCards : 0
    );
  };

  const prevSlide = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleCards >= 0 ? prevIndex - visibleCards : comments.length - visibleCards
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), 500); // Duration of fade out
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const fadeStyle = {
    opacity: fade ? 0 : 1,
    transition: 'opacity 0.5s ease',
  };

  return (
    <div
      className="mt-20 flex flex-col items-center justify-center min-h-[800px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("pexels-george-ketselashvili-228925-746716.jpg")',
      }}
    >
      <div className="text-center">
        <p className="our-blog-txt text-white text-3xl mb-3" style={{ fontFamily: '"Arizonia", cursive' }}>
          Rəy
        </p>
        <p className="font-poppins text-white text-5xl font-semibold mb-10">Turist Rəyləri</p>
      </div>

      {/* Slider container with fade effect */}
      <div
        id="slider-container"
        className="flex flex-wrap lg:flex-nowrap justify-center gap-4 w-full max-w-[1200px] mx-auto mb-5"
        style={fadeStyle}
      >
        {comments.slice(currentIndex, currentIndex + visibleCards).map((comment, index) => (
          <CommentBox key={index} ProfileImg={comment.ProfileImg} Name={comment.Name} />
        ))}
      </div>

      <div className="flex gap-2">
        <button
          className={`w-[10px] h-[10px] rounded-full ${Math.floor(currentIndex / visibleCards) === 0 ? 'bg-[#2A87CF]' : 'bg-[#D7D7D7]'}`}
          onClick={prevSlide}
        />
        <button
          className={`w-[10px] h-[10px] rounded-full ${Math.floor(currentIndex / visibleCards) === 1 ? 'bg-[#2A87CF]' : 'bg-[#D7D7D7]'}`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}

export default TouristComment;
