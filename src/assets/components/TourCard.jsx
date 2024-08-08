import React from 'react';
import '../css/style.css';

function TourCard({imageSrc}) {
    return (

        <div className="relative group w-[350px] h-[300px] bg-white shadow-lg rounded-lg mb-5">
          <img
            loading="lazy"
            src={imageSrc}
            alt="home-1"
            className="w-full h-full object-cover rounded-lg"
            style={{ cursor: "pointer" }}
          />
          <div className="absolute top-0 left-3">
            <div className="z-[1] before:size-0 before:right-[-7px] before:border-l-[7px] before:border-t-[7px] before:border-l-[#6DA4CD] before:border-r-transparent before:border-b-transparent before:border-t-transparent before:absolute  before:top-0 after:size-[0] after:left-[-7px] after:border-l-[7px] after:border-b-[7px] after:absolute after:top-0 after:border-b-[#6DA4CD] after:border-t-transparent after:border-r-transparent after:border-l-transparent flex items-center absolute bg-[#6DA4CD] w-[140px] top-[-7px] left-[20px] px-[15px] py-[5px]">
              <span className=" text-white font-bold text-lg  h-8 ">
                $550/adam
              </span>
            </div>
          </div>
          <div className="absolute -bottom-10 left-0 right-0 mx-auto w-72 h-42 bg-white shadow-lg rounded-lg p-6 transform translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="mb-2">
              <p className="font-medium leading-9">8 Günlər Turu</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">
                <a href="#">Banaue Rice Terraces</a>
              </h3>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-1.5">
                <i className="fa-solid fa-location-dot w-4 h-4 text-grey-500" />
                <span className="font-normal text-base">
                  Banaue, Ifugao, Philippines
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-sink w-4 h-4 text-[#6DA4CD]" />
                  <span className="font-medium text-base">2</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bed w-4 h-4 text-[#6DA4CD]" />
                  <span className="font-medium text-base">3</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-mountain w-4 h-4 text-[#6DA4CD]" />
                  <span className="font-medium text-base">Dağ yaxınlığında</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}
export default TourCard