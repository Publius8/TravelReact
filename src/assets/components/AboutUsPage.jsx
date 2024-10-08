import React, { useState, useEffect } from 'react';
import '../css/aboutUs.css'
import CommentBox from './CommentBox'


function AboutUsPage() {

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
        <>
  <div className="container mx-auto max-w-[1200px] px-[10px] flex flex-col sm:flex-row items-center justify-center gap-8 mt-[20px] mb-[50px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-1.5 w-full max-w-3xl">
      <div className="relative w-full h-96 sm:w-[285px] shadow-lg rounded-lg animate-fadeInUp animate-delay-1">
        <img
          loading="lazy"
          src="sea.png"
          alt="Ocean view"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-[#2A87CF] opacity-50 rounded-lg" />
        <div className="absolute mb-6 top-3 left-[-10px] bg-[#2A87CF] text-white p-2 shadow-lg w-28 h-20 after:absolute after:top-0 after:right-[-20px] after:border-t-[40px] after:border-t-transparent after:border-l-[20px] after:border-l-[#2A87CF] after:border-b-[40px] after:border-b-transparent">
          <i className="fas fa-map-pin flex items-center justify-center inset-0 p-4 text-[30px]" />
        </div>
        <div className="ml-5 absolute bottom-0 left-0 right-0 text-white p-4">
          <div className="font-bold">Fəaliyyətlər</div>
          <p className="mt-2 text-[#E2EEFC]">
            Onların məkanından keçən Duden adlı kiçik çay, oraya lazım olanı
            təmin edir.
          </p>
        </div>
      </div>
      <div className="relative w-full h-96 sm:w-[285px] shadow-lg rounded-lg animate-fadeInUp animate-delay-2">
        <img
          loading="lazy"
          src="mountain.jpg"
          alt="Mountain view"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-[#7AB9BC] opacity-50 rounded-lg" />
        <div className="absolute mb-6 top-3 left-[-10px] bg-[#6DA4CD] text-white p-2 shadow-lg w-28 h-20 after:absolute after:top-0 after:right-[-20px] after:border-t-[40px] after:border-t-transparent after:border-l-[20px] after:border-l-[#6DA4CD] after:border-b-[40px] after:border-b-transparent">
          <i className="fas fa-map-location-dot flex items-center justify-center p-4 text-[30px]" />
        </div>
        <div className="ml-5 absolute bottom-0 left-0 right-0 text-white p-4">
          <div className="font-bold">Fəaliyyətlər</div>
          <p className="mt-2 text-[#E2EEFC]">
            Onların məkanından keçən Duden adlı kiçik çay, oraya lazım olanı
            təmin edir.
          </p>
        </div>
      </div>
      <div className="relative w-full h-96 sm:w-[285px] shadow-lg rounded-lg animate-fadeInUp animate-delay-3">
        <img
          loading="lazy"
          src="forest.jpg"
          alt="Forest view"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-[#67BFCB] opacity-50 rounded-lg" />
        <div className="absolute mb-6 top-3 left-[-10px] bg-[#6DA4CD] text-white p-2 shadow-lg w-28 h-20 after:absolute after:top-0 after:right-[-20px] after:border-t-[40px] after:border-t-transparent after:border-l-[20px] after:border-l-[#6DA4CD] after:border-b-[40px] after:border-b-transparent">
          <i className="fas fa-mountain-sun flex items-center justify-center p-4 inset-0 text-[30px]" />
        </div>
        <div className="ml-5 absolute bottom-0 left-0 right-0 text-white p-4">
          <div className="font-bold">Fəaliyyətlər</div>
          <p className="mt-2 text-[#E2EEFC]">
            Onların məkanından keçən Duden adlı kiçik çay, oraya lazım olanı
            təmin edir.
          </p>
        </div>
      </div>
      <div className="relative w-full h-96 sm:w-[285px] shadow-lg rounded-lg animate-fadeInUp animate-delay-4">
        <img
          loading="lazy"
          src="bridge.jpg"
          alt="Bridge view"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-red-500 opacity-50 rounded-lg" />
        <div className="absolute mb-6 top-3 left-[-10px] bg-[#2A87CF] text-white p-2 shadow-lg w-28 h-20 after:absolute after:top-0 after:right-[-20px] after:border-t-[40px] after:border-t-transparent after:border-l-[20px] after:border-l-[#2A87CF] after:border-b-[40px] after:border-b-transparent">
          <i className="fas fa-signs-post flex items-center justify-center p-4 inset-0 text-[30px]" />
        </div>
        <div className="ml-5 absolute bottom-0 left-0 right-0 text-white p-4">
          <div className="font-bold">Fəaliyyətlər</div>
          <p className="mt-2 text-[#E2EEFC]">
            Onların məkanından keçən Duden adlı kiçik çay, oraya lazım olanı
            təmin edir.
          </p>
        </div>
      </div>
    </div>
    <div className="ml-0 sm:ml-10 max-w-3xl sm:max-w-none md:w-[874px]">
      <span
        className="text-[#2A87CF] font-bold text-4xl mb-4 animate-fadeInUp animate-delay-1"
        style={{ fontFamily: '"Arizonia", cursive' }}
      >
        Xoş gəldiniz
      </span>
      <h2 className="text-4xl mt-4 text-gray-800 font-semibold animate-fadeInUp animate-delay-2">
        Macəranıza başlamaq vaxtıdı
      </h2>
      <p className="mt-4 text-gray-600 leading-relaxed text-base font-normal animate-fadeInUp animate-delay-3">
        Onların məkanından keçən Duden adlı kiçik çay, ora lazım olan
        qayda-qanunları təmin edir. Bu, cümlələrin qovurulmuş parçalarının
        ağızınıza uçduğu paradisematik bir ölkədir.
      </p>
      <p className="mt-4 text-gray-600 leading-relaxed text-base font-normal animate-fadeInUp animate-delay-4">
        Çox uzaqda, söz dağlarının arxasında, Vokalia və Consonantia
        ölkələrindən uzaqda, kor mətnlər yaşayır. Onlar Bookmarksgrove-da,
        Semantics adlı böyük bir dil okeanının sahilində ayrılmış halda
        yaşayırlar.
      </p>
      <div className="mt-6 animate-fadeInUp animate-delay-5 hidden">
        <button
          className="bg-[#6DA4CD] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2A87CF] transition duration-300 ease-in-out"
          onclick="location.href='https://planla.az/destination';"
        >
          Təyinat Yerini Axtar
        </button>
      </div>
    </div>
  </div>
  <div

>
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
  


</div>

        </>
    )
}



export default AboutUsPage