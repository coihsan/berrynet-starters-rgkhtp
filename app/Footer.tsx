'use client'
import React, {useState} from 'react'
import {quicklink, ourproducts, company, helpsupport} from '@/app/components/constants/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    const [isExpanded, setIsExpanded] = useState(false);

    const buttonClassName = `${isExpanded ? "hidden" : "block"} text-indigo-500 text-[1.2rem]`;

    return(
        <footer className='containers-center'>
            
            <div className='flex justtify-between gap-10 py-20 max-[600px]:flex-col'>
                <div className=''>
                    <div className='max-w-lg flex flex-col gap-3 '>
                        <Image
                        src="/berrynet.svg"
                        alt="berrynet Logo"
                        className="dark:invert"
                        width={220}
                        height={24}
                        priority
                        />
                        <p className='text-[14px]'>Our company is committed to providing the best possible internet service to our customers. We offer a variety of plans to fit every budget and need, and we guarantee fast, reliable connections.</p>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5 w-full max-[600px]:grid-cols-1'>
                <div>
                    <button type='button' 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={'buttonClassName text-indigo-500 text-[1.2rem]'}>Quick Links
                    </button>
                    <ul className={'max flex flex-col gap-2 pt-[1rem] '}>
                        {quicklink.map((quicklink)=>(
                            <li className={'${isExpanded ? "block" : "hidden"}  hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Our Products</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {ourproducts.map((ourproducts)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{ourproducts.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Our Company</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {company.map((company)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{company.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Help & Support</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {helpsupport.map((helpsupport)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{helpsupport.title}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}