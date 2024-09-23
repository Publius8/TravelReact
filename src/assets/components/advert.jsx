import React from 'react';
import '../css/style.css';

function Advert() {
    return (
        <>

  <div className="container mx-auto max-w-[1200px] px-[10px] flex flex-col sm:flex-row items-center justify-center gap-8 mt-[20px] mb-[50px] ">
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
</>

    )
}

export default Advert