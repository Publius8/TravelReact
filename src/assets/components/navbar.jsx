import React from 'react';
import '../css/style.css';

function Navbar() {
    return (
        <header id="headerColor" >
  <nav
    id="navScroll"
    className="border-gray-200 bg-white w-[100%]"
    style={{ position: "fixed", zIndex: 10000000, top: 0 }}
  >
    <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
      <a
        href="./index.html"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          style={{ width: 65, height: "auto" }}
          src="planla 3-Photoroom.png"
          className="h-8 "
          alt="Flowbite Logo"
        />
        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Planla.az</span> */}
      </a>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only">Əsas menyunu aç</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a
              href="./index.html"
              className="block py-2 px-3 md:p-0 text-[#6DA4CD]"
              aria-current="page"
            >
              Ana səhifə
            </a>
          </li>
          <li>
            <a
              href="./about.html"
              className="block py-2 px-3 md:p-0 text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor"
            >
              Haqqımızda
            </a>
          </li>
          <li>
            <a
              href="./destination.html"
              className="block py-2 px-3 md:p-0 text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor"
            >
              Məkan
            </a>
          </li>
          <li>
            <a
              href="./hotel.html"
              className="block py-2 px-3 md:p-0 text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor"
            >
              Hotel
            </a>
          </li>
          <li>
            <a
              href="./blog.html"
              className="block py-2 px-3 md:p-0 text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="./contact.html"
              className="block py-2 px-3 md:p-0 text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor"
            >
              Əlaqə
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="maxWidth">
    <div className="flex flex-col marginus">
      <span
        className="text-white font-arizonia text-3xl"
        style={{ fontFamily: '"Arizonia", cursive' }}
      >
        Xoş gəldiniz
      </span>
      <h1 className="text-6xl text-white leading-[1.2] font-bold">
        Sevdiyiniz Məkanı <br />
        Bizimlə Kəşf Edin
      </h1>
      <span className="text-white mt-5 font-bold">
        Dünyanın istənilən yerinə səyahət edin.
      </span>
    </div>
  </div>
</header>

    )
}

export default Navbar