'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";

import React, {useState} from 'react'
import {quicklink, ourproducts, company, helpsupport} from '@/app/components/constants/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    const [isExpanded, setIsExpanded] = useState(false);
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        <footer className='containers-center'>
            
            <div className='flex justtify-between gap-10 py-20 max-[600px]:hidden'>
                <div className=''>
                    <div className='max-w-lg flex flex-col gap-3 '>
                        <Image
                        src="/berrynet.svg"
                        alt="berrynet Logo"
                        className=""
                        width={220}
                        height={24}
                        priority
                        />
                        <p className='text-[14px]'>Our company is committed to providing the best possible internet service to our customers. We offer a variety of plans to fit every budget and need, and we guarantee fast, reliable connections.</p>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5 w-full max-[600px]:grid-cols-1 max-[600px]:gap-1 max-[600px]:pb-[10rem]'>
                <div>
                    <h3  
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={'buttonClassName text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'}>Quick Links
                    </h3>
                    <ul className={'accordionContent max-[600px]:hidden flex flex-col gap-2 pt-[1rem] '}>
                        {quicklink.map((quicklink)=>(
                            <li key={quicklink.id} className={'hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Our Products</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {ourproducts.map((ourproducts)=>(
                            <li key={ourproducts.id} className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{ourproducts.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Our Company</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {company.map((company)=>(
                            <li key={company.id} className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{company.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Help & Support</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {helpsupport.map((helpsupport)=>(
                            <li key={helpsupport.id} className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{helpsupport.title}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
            <Accordion variant="light" className="hidden max-[600px]:block pb-[14rem]">
            <AccordionItem key="1" aria-label="Quick Link" title="Quick Link">
            <ul className={'accordionContent flex flex-col gap-2 pb-[1rem] '}>
                {quicklink.map((quicklink)=>(
                    <li key={quicklink.id} className={'hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                ))}
            </ul>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Our Products" title="Our Products">
            <ul className={'accordionContent flex flex-col gap-2 pb-[1rem] '}>
                {ourproducts.map((ourproducts)=>(
                    <li key={ourproducts.id} className={'hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={ourproducts.path}>{ourproducts.title}</Link></li>
                ))}
            </ul>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Company" title="Company">
            <ul className={'accordionContent flex flex-col gap-2 pb-[1rem] '}>
                {company.map((company)=>(
                    <li key={company.id} className={'hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={company.path}>{company.title}</Link></li>
                ))}
            </ul>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Help & Support" title="Help & Support">
            <ul className={'accordionContent flex flex-col gap-2 pb-[1rem] '}>
                {helpsupport.map((helpsupport)=>(
                    <li key={helpsupport.id} className={'hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={helpsupport.path}>{helpsupport.title}</Link></li>
                ))}
            </ul>
            </AccordionItem>
            </Accordion>
        </footer>
    )
}