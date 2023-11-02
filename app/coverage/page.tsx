'use client'
import React, {useState} from 'react'
import {SearchArea} from '@/app/components/constants/searcharea'

export default function Coverage(){
    const [selectedData, setSelectedData] = useState(SearchArea);
    // const uniqueProvinces = [...new Set(SearchArea.map(item => item.provinces))];

    interface SearchAreaItem {
        id: number,
        searchterms: string,
        regency: string,
        village: string,
        postalcode: string,
        salescenter: string,
        helpcenter: string,
        provinces: string,
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
    
        if (selectedOption === "all") {
          setSelectedData(SearchArea);
        } else {
          setSelectedData(SearchArea.filter((item) => item.provinces === selectedOption));
        }
      };
      
  return (
    <section className="max-w-screen-xl mx-auto py-[10rem]">
      <h1 className="text-3xl text-center pb-[2rem]">Find berrynet in your area</h1>

      <div className="flex flex-col max-w-3xl">
        <select
          className="text-black bg-white max-w-md rounded-md h-[2rem]"
          name=""
          id=""
          placeholder="Select area"
          onChange={handleChange}
        >
          <option value="all">All</option>
          {SearchArea.map((SearchArea) => (
            <option key={SearchArea.id} value={SearchArea.provinces}>
              {SearchArea.provinces}
              
            </option>
          ))}
        </select>
      </div>

      <ul className='grid grid-cols-3 gap-5 mt-[2rem]'>
        {selectedData.map((SearchArea) => (
            <li className='p-[1rem] border border-blue-100 bg-blue-100/10 rounded-xl' key={SearchArea.id}>
                <div className='flexCenter gap-5 border-b-1 pb-[1rem] border-blue-100/30'>
                    <h1 className='font-bold'>{SearchArea.village}</h1>
                    {" - "}
                    <h1>{SearchArea.regency}</h1>
                </div>
                <div className='flex pt-[1rem] '>
                <div className='flexColCenter w-full'>
                    <span className='font-bold'>Sales Center</span>
                    <p className='bg-lime-700 px-5 py-1 rounded-md'>{SearchArea.salescenter}</p>
                </div>
                <div className='flexColCenter w-full'>
                    <span className='font-bold'>Help Center</span>
                    <p className='bg-sky-500 px-5 py-1 rounded-md'>{SearchArea.helpcenter}</p>
                </div>
                </div>
            </li>
        ))}
      </ul>
    </section>
  );
}