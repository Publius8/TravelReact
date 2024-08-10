import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/style.css';

function Navbar() {
    const location = useLocation();

    const getHeaderStyles = () => {
        switch (location.pathname) {
            case '/':
                return {
                    backgroundImage: 'url(pexels-asadphoto-1483054.jpg)',
                    minHeight: '700px',
                };
            case '/about':
                return {
                    backgroundImage: 'url(pexels-asadphoto-1450340.jpg)',
                    minHeight: '420px',
                };
            case '/places':
                return {
                    backgroundImage: 'url(pexels-szelei-robert-543378-1482193.jpg)',
                    minHeight: '700px',
                };
            case '/hotels':
                return {
                    backgroundImage: 'url(pexels-pixabay-273886.jpg)',
                    minHeight: '700px',
                };
            case '/blog':
                return {
                    backgroundImage: 'url(pexels-asadphoto-9215862.jpg)',
                    minHeight: '420px',
                };
            case '/contact':
                return {
                    backgroundImage: 'url(pexels-arthur-how-wong-3836390-5688988.jpg)',
                    minHeight: '420px',
                };
            default:
                return {
                    backgroundImage: 'url(/path/to/default-image.jpg)',
                    minHeight: '520px',
                };
        }
    };

    const getHeaderText = () => {
        switch (location.pathname) {
            case '/':
                return {
                    greeting: 'Xoş gəldiniz',
                    title: 'Sevdiyiniz Məkanı <br /> Bizimlə Kəşf Edin',
                    description: 'Dünyanın istənilən yerinə səyahət edin.',
                };
            case '/about':
                return {
                    greeting: 'Haqqımızda',
                    title: 'Biz Kimik?',
                    description: 'Məlumatımızı oxuyun və bizim haqqımızda daha çox öyrənin.',
                };
            case '/places':
                return {
                    greeting: 'Məkan',
                    title: 'Kəşf Ediləcək Məkanlar',
                    description: 'Ən yaxşı yerləri tapın və yeni yerləri kəşf edin.',
                };
            case '/hotels':
                return {
                    greeting: 'Hotel',
                    title: 'Mükəmməl Otellər',
                    description: 'Ən yaxşı otel təkliflərini tapın və rezervasiya edin.',
                };
            case '/blog':
                return {
                    greeting: 'Blog',
                    title: 'Son Yeniliklər',
                    description: 'Son yazılarımızı oxuyun və xəbərləri izləyin.',
                };
            case '/contact':
                return {
                    greeting: 'Əlaqə',
                    title: 'Bizimlə Əlaqə',
                    description: 'Sual və təklifləriniz üçün bizimlə əlaqə saxlayın.',
                };
            default:
                return {
                    greeting: 'Xoş gəldiniz',
                    title: 'Bizimlə Kəşf Edin',
                    description: 'Dünyanın istənilən yerinə səyahət edin.',
                };
        }
    };

    const { greeting, title, description } = getHeaderText();

    return (
        <header
            id="headerColor"
            style={{
                ...getHeaderStyles(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <nav
                id="navScroll"
                className="border-gray-200 bg-white w-[100%]"
                style={{ position: "fixed", zIndex: 10000000, top: 0 }}
            >
                <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            style={{ width: 65, height: "auto" }}
                            src="planla 3-Photoroom.png"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                    </Link>
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
                                <Link 
                                    to="/" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`} 
                                    aria-current="page"
                                >
                                    Ana səhifə
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/about' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`}
                                >
                                    Haqqımızda
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/places" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/places' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`}
                                >
                                    Məkan
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/hotels" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/hotels' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`}
                                >
                                    Hotel
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/blog" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/blog' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    className={`block py-2 px-3 md:p-0 ${
                                        location.pathname === '/contact' ? 'text-[#6DA4CD]' : 'text-black transition-all duration-700 hover:text-[#6DA4CD] ulesColor'
                                    }`}
                                >
                                    Əlaqə
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="maxWidth">
                <div id='here' className="flex flex-col marginus">
                    <span
                        className="text-white font-arizonia text-3xl"
                        style={{ fontFamily: '"Arizonia", cursive' }}
                    >
                        {greeting}
                    </span>
                    <h1 className="text-6xl text-white leading-[1.2] font-bold" dangerouslySetInnerHTML={{ __html: title }} />
                    <span className="text-white mt-5 font-bold">
                        {description}
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
