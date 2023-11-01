'use client'
import React, {useState} from 'react'
import {searcharea} from '@/app/components/constants/searcharea'

const SearchLister = () => {
    
}
export default function Coverage(){
    return(
        <section className="max-w-screen-xl mx-auto py-[10rem]">
            <h1 className="text-3xl text-center pb-[2rem]">Find berrynet in your area</h1>
                    <div className='flex flex-col gap-3 max-w-3xl mx-auto bg-rose-800'>
                        <select className='text-black bg-white max-w-md rounded-md h-[2rem]' name="" id="" placeholder='Select area'>
                            <option value="all">All</option>
                            <option value="jakarta">DKI Jakarta</option>
                            <option value="banten">Banten</option>
                            <option value="bekasi">Bekasi</option>
                            <option value="bogor">Bogor</option>
                            <option value="bandung">Bandung</option>
                            <option value="surabaya">Surabaya</option>
                        </select>
                    </div>
                    <ul>

                    </ul>
        </section>
    )
}