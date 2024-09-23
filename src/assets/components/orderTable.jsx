import React, { useState } from 'react';
import '../css/style.css';

function OrderTable() {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!location || !startDate || !endDate || !minPrice || !maxPrice) {
            alert("fill all the inputs")
        } else {
          const message = `Location: ${location}, Start Date: ${startDate}, End Date: ${endDate}, Min Price: $${minPrice}, Max Price: $${maxPrice}`;
          alert(message);
          setLocation('');
          setStartDate('');
          setEndDate('');
          setMinPrice('');
          setMaxPrice('');
        }


    };

    return (
        <div className="max-w-[1200px] mx-auto bg-white shadow-lg h-[120px] relative bottom-[50px] rounded-[0_10px_10px_10px] pleaseWork">
            <div className="flex items-center gap-[10px] absolute top-[-50px]">
                <button className="outline-none border-none inline-flex items-center justify-center h-[50px] bg-white text-[#6DA4CD] active px-[30px] rounded-[5px_5px_0_0]">
                    <span className="font-semibold text-[19px]">Tur axtarışı</span>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-[24px] h-full justify-between divide-x-2 mobileCard">
                <div className="p-[24px] flex flex-col justify-evenly h-full flex-1">
                    <h3 className="text-[#6DA4CD] font-bold text-[18px]">Mekan</h3>
                    <label className="flex items-center gap-[10px]">
                        <i className="fa fa-magnifying-glass"></i>
                        <input type="text" placeholder="yer axtarın" className="px-[10px] outline-none" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </label>
                </div>
                <div className="p-[24px] flex flex-col justify-evenly h-full flex-1">
                    <h3 className="text-[#6DA4CD] font-bold text-[18px]">Giriş tarixi</h3>
                    <label className="flex items-center gap-[10px]">
                        <input type="text" id="start-datepicker" name="start" placeholder="Tarix seçin" className="outline-none" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                </div>
                <div className="p-[24px] flex flex-col justify-evenly h-full flex-1">
                    <h3 className="text-[#6DA4CD] font-bold text-[18px]">Çıxış tarixi</h3>
                    <label className="flex items-center gap-[10px]">
                        <input type="text" id="end-datepicker" name="end" placeholder="Tarix seçin" className="outline-none" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </label>
                </div>
                <div className="p-[24px] flex flex-col justify-evenly h-full flex-1">
                    <h3 className="text-[#6DA4CD] font-bold text-[18px]">Qiymət</h3>
                    <div className="flex items-center">
                        <label className="flex items-center gap-[10px] justify-between">
                            <div className="flex items-center">
                                <span>$</span>
                                <input type="number" placeholder="min" className="outline-none w-[60px]" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                            </div>
                            <span className="bg-gray-200 w-[2px] h-[16px] inline-block"></span>
                            <div className="flex items-center">
                                <span>$</span>
                                <input type="number" placeholder="max" className="outline-none w-[60px]" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="size-full flex bg-[#2A87CF] rounded-[0_10px_10px_0] mobilButtonSize">
                    <button type="submit" className="inline-flex items-center justify-center size-full text-center text-[20px] text-white font-semibold">Axtarın</button>
                </div>
            </form>
        </div>
    );
}

export default OrderTable;
