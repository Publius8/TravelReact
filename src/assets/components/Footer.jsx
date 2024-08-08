import React from 'react';
import '../css/style.css';

function Footer() {
    return (
<footer className="relative pb-[7em] h-[100%] sm:h-[100%]  bg-no-repeat ">
  <img
    loading="lazy"
    src="bg_3.jpg.webp"
    className="absolute object-cover size-full z-[-1] "
    alt="footerBack"
  />
  <div className="container w-[1200px] mx-auto mobileFOoter">
    <div className="grid grid-cols-1 md:grid-cols-4 mb-[50px]">
      <div className="pt-[3rem] border-r-2">
        <div className="pt-[3rem] px-[16px]">
          <h2 className="mb-[40px] text-[18px] font-bold">Haqqımızda</h2>
          <p className="text-[#00000080] mb-[16px]">
            Çox uzaqda, sözün arxasında
            <br /> dağların arxasında,
            <br /> Vokalia ölkələrindən uzaqda,
            <br /> kor mətnlər yaşayır.
          </p>
          <div className="flex items-center">
            <div className="rounded-full bg-[#2A87CF] size-[40px] inline-flex items-center justify-center mr-[10px]">
              <a href="https://x.com/home?lang=ru">
                <i className="text-white fa-brands fa-twitter" />
              </a>
            </div>
            <div className="rounded-full bg-[#2A87CF] size-[40px] inline-flex items-center justify-center mr-[10px]">
              <a href="https://www.facebook.com/?locale=ru_RU">
                <i className="fa-brands fa-facebook-f text-white" />
              </a>
            </div>
            <div className="rounded-full bg-[#2A87CF] size-[40px] inline-flex items-center justify-center mr-[10px]">
              <a href="https://www.instagram.com/planla_az?igsh=NmVzMWc1bjZ4bmly">
                <i className="fa-brands fa-instagram text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] border-r-2">
        <div className="pt-[3rem] px-[16px]">
          <h2 className="mb-[40px] text-[18px] font-bold">Məlumat</h2>
          <ul>
            <li className="pb-[8px]">
              <a className="text-[#00000080]" href="#">
                Onlayn Sorğu
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Ümumi Sorğular
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Rezervasiya Şərtləri
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Məxfilik və Siyasət
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Geri Ödəmə Siyasəti
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Bizimlə Əlaqə
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[3rem] border-r-2">
        <div className="pt-[3rem] px-[16px]">
          <h2 className="mb-[40px] text-[18px] font-bold">Təcrübə</h2>
          <ul>
            <li className="pb-[8px]">
              <a className="text-[#00000080]" href="#">
                Macəra
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Otellər və Restoranlar
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Çimərlik
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Təbiət
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Kempinq
              </a>
            </li>
            <li className="py-[8px]">
              <a className="text-[#00000080]" href="#">
                Party
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[3rem] border-r-2">
        <div className="pt-[3rem] px-[16px]">
          <h2 className="mb-[40px] text-[18px] font-bold">Sualınız Var?</h2>
          <ul>
            <li className="flex mb-[16px]">
              <span className="mr-[12px] text-[#2A87CF] text-[12px]">
                <i className="fa-solid fa-location-dot" />
              </span>
              <a
                href="https://www.google.com/maps/place/%C3%87inar+Plaza/@40.4145812,49.9011366,17z/data=!3m1!4b1!4m6!3m5!1s0x40306295fc91b117:0x2ff9b248763925b7!8m2!3d40.4145771!4d49.9037115!16s%2Fg%2F11dxsm75xn?entry=ttu"
                className="cursor-pointer"
                target="_blank"
              >
                <span className="text-[#00000080]">Baku</span>
              </a>
            </li>
            <li className="flex mb-[16px]">
              <span className="mr-[12px] text-[#2A87CF] text-[12px]">
                <i className="fa-solid fa-phone" />
              </span>
              <a href="tel:+2 392 3929 210" className="text-[#00000080]">
                +2 392 3929 210
              </a>
            </li>
            <li className="flex mb-[16px]">
              <span className="mr-[12px] text-[#2A87CF] text-[12px]">
                <i className="fa-solid fa-paper-plane" />
              </span>
              <a href="mailto: info@planla.az" className="text-[#00000080]">
                info@planla.az
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-[#00000080] text-center">
      Copyright ©2024 All rights reserved
    </p>
  </div>
</footer>

    )
}
export default Footer