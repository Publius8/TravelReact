import React from 'react';
import '../css/style.css';

function ImageText() {
    return (
        <div
  className="relative flex justify-center w-full h-[550px] shadow-lg object-center bg-cover mt-16 rounded-lg"
  style={{
    backgroundImage: 'url("pexels-lazarevkirill-8645575.jpg")'
  }}
>
  <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
  <div className="relative z-10 flex flex-col justify-center items-center text-center px-8 sm:px-0">
    <h2 className="text-4xl text-white font-semibold animate-fadeInUp animate-delay-1">
      Turunuzu Bizimlə Yadda Qalan və Təhlükəsiz Edin
    </h2>
    <p className="text-white text-lg mt-4 leading-relaxed animate-fadeInUp animate-delay-2">
      Çox uzaqda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən
      uzaqda, kor mətnlər yaşayır.
    </p>
    <button
      className="bg-[#6DA4CD] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2A87CF] transition duration-300 ease-in-out mt-6 animate-fadeInUp animate-delay-3 hidden"
      onclick="location.href='https://planla.az/destination'"
    >
      Səyahətinizə İndi Başlayın
    </button>
  </div>
</div>

    )
}

export default ImageText