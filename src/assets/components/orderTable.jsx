import React from 'react';
import '../css/style.css';

function OrderTable() {
    return (
        <div
    class="max-w-[1200px] mx-auto bg-white shadow-lg shadow h-[120px] relative bottom-[50px] rounded-[0_10px_10px_10px] pleaseWork">
    <div class="flex items-center gap-[10px] absolute top-[-50px]">
      <button
        class="outline-none	border-none inline-flex items-center justify-center h-[50px] bg-white text-[#6DA4CD] active px-[30px] rounded-[5px_5px_0_0]">
        <span class="font-semibold text-[19px]">Tur axtarışı</span>
      </button>
      {/* <button
        class="outline-none	border-none inline-flex items-center justify-center h-[50px] bg-[#6DA4CD] text-white active px-[30px] rounded-[5px_5px_0_0]">
        <span class="font-semibold text-[19px]">Hotel</span>
      </button> */}
    </div>
    <form class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-[24px] h-full justify-between divide-x-2 mobileCard">
  <div class="p-[24px] flex flex-col justify-evenly h-full flex-1">
    <h3 class="text-[#6DA4CD] font-bold text-[18px]">Mekan</h3>
    <label for="" class="flex items-center gap-[10px]">
      <i class="fa fa-magnifying-glass"></i>
      <input type="text" placeholder="yer axtarın" class="px-[10px] outline-none" />
    </label>
  </div>
  <div class="p-[24px] flex flex-col justify-evenly h-full flex-1">
    <h3 class="text-[#6DA4CD] font-bold text-[18px]">Giriş tarixi</h3>
    <label for="" class="flex items-center gap-[10px]">
      <input type="text" id="start-datepicker" name="start" placeholder="Tarix seçin" class="outline-none" />
    </label>
  </div>
  <div class="p-[24px] flex flex-col justify-evenly h-full flex-1">
    <h3 class="text-[#6DA4CD] font-bold text-[18px]">Çıxış tarixi</h3>
    <label for="" class="flex items-center gap-[10px]">
      <input type="text" id="end-datepicker" name="end" placeholder="Tarix seçin" class="outline-none" />
    </label>
  </div>
  <div class="p-[24px] flex flex-col justify-evenly h-full flex-1">
    <h3 class="text-[#6DA4CD] font-bold text-[18px]">Qiymət</h3>
    <div class="flex items-center">
      <label for="" class="flex items-center gap-[10px] justify-between">
        <div class="flex items-center">
          <span>$</span>
          <input type="number" placeholder="min" class="outline-none w-[60px]" />
        </div>
        <span class="bg-gray-200 w-[2px] h-[16px] inline-block"></span>
        <div class="flex items-center">
          <span>$</span>
          <input type="number" placeholder="max" class="outline-none w-[60px]" />
        </div>
      </label>
    </div>
  </div>
  <div class="size-full flex bg-[#2A87CF] rounded-[0_10px_10px_0] mobilButtonSize">
    <a href="#" class="inline-flex items-center justify-center size-full text-center text-[20px] text-white font-semibold">Axtarın</a>
  </div>
</form>

  </div>
    )
}

export default OrderTable;