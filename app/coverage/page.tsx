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

      <ul className='grid grid-cols-4 gap-5 mt-[2rem]'>
        {selectedData.map((SearchArea) => (
            <li className='p-[1rem] border border-blue-100/30 bg-sky-100/10 rounded-xl' key={SearchArea.id}>
                <div className='flexCenter gap-2 border-b-1 pb-[1rem] border-blue-100/30'>
                    <h1 className='font-bold'>{SearchArea.village}</h1>
                    {" - "}
                    <span>{SearchArea.regency}</span>
                </div>
                <div className='flexColCenter gap-3 pt-[1rem] '>
                <div className='flexColCenter gap-2 w-full'>
                    <span className='font-bold'>Sales Center</span>
                    <p className='bg-green-400 text-gray-950 font-medium px-5 py-1 rounded-md flex gap-2'>
                      <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                      {SearchArea.salescenter}
                      </p>
                </div>
                <div className='flexColCenter gap-2 w-full'>
                    <span className='font-bold'>Help Center</span>
                    <p className='bg-gray-500 px-5 font-medium py-1 rounded-md flex gap-2'>
                    <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
                      {SearchArea.helpcenter}</p>
                </div>
                </div>
            </li>
        ))}
      </ul>
    </section>
  );
}