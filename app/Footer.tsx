'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";

import React, {useState} from 'react'
import {quicklink, ourproducts, company, helpsupport} from '@/app/components/constants/data'
import Link from 'next/link'
import Image from 'next/image'

const socialicon = [
    {
        // Instagram
        iconSvg : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>,
        link : "#"
    },
    {
        // Facebook
        iconSvg : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>,
        link : "#"
    },
    {
        // Twitter
        iconSvg : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>,
        link : "#"
    },
    {
        // Tiktok
        iconSvg : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>,
        link : "#"
    },
    {
        // Threads
        iconSvg : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM294.2 244.3c19.5 9.3 33.7 23.5 41.2 40.9c10.4 24.3 11.4 63.9-20.2 95.4c-24.2 24.1-53.5 35-95.1 35.3h-.2c-46.8-.3-82.8-16.1-106.9-46.8C91.5 341.8 80.4 303.7 80 256v-.1-.1c.4-47.7 11.5-85.7 33-113.1c24.2-30.7 60.2-46.5 106.9-46.8h.2c46.9 .3 83.3 16 108.2 46.6c12.3 15.1 21.3 33.3 27 54.4l-26.9 7.2c-4.7-17.2-11.9-31.9-21.4-43.6c-19.4-23.9-48.7-36.1-87-36.4c-38 .3-66.8 12.5-85.5 36.2c-17.5 22.3-26.6 54.4-26.9 95.5c.3 41.1 9.4 73.3 26.9 95.5c18.7 23.8 47.4 36 85.5 36.2c34.3-.3 56.9-8.4 75.8-27.3c21.5-21.5 21.1-47.9 14.2-64c-4-9.4-11.4-17.3-21.3-23.3c-2.4 18-7.9 32.2-16.5 43.2c-11.4 14.5-27.7 22.4-48.4 23.5c-15.7 .9-30.8-2.9-42.6-10.7c-13.9-9.2-22-23.2-22.9-39.5c-1.7-32.2 23.8-55.3 63.5-57.6c14.1-.8 27.3-.2 39.5 1.9c-1.6-9.9-4.9-17.7-9.8-23.4c-6.7-7.8-17.1-11.8-30.8-11.9h-.4c-11 0-26 3.1-35.6 17.6l-23-15.8c12.8-19.4 33.6-30.1 58.5-30.1h.6c41.8 .3 66.6 26.3 69.1 71.8c1.4 .6 2.8 1.2 4.2 1.9l.1 .5zm-71.8 67.5c17-.9 36.4-7.6 39.7-48.8c-8.8-1.9-18.6-2.9-29-2.9c-3.2 0-6.4 .1-9.6 .3c-28.6 1.6-38.1 15.5-37.4 27.9c.9 16.7 19 24.5 36.4 23.6l-.1-.1z"/></svg>,
        link : "#"
    },
]

export default function Footer(){
    const [isExpanded, setIsExpanded] = useState(false);
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        <footer className='containers-center '>
            
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
                        <div className="flex gap-3">
                            {socialicon.map((socialicon) =>(
                            <Link className="fill-current text-2xl hover:text-yellow-500" href={socialicon.link} target="_blank">{socialicon.iconSvg}</Link>
                            ))}
                        </div>
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
                            <li key={quicklink.id} className={'hover:text-amber-500 hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'}><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Our Products</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {ourproducts.map((ourproducts)=>(
                            <li key={ourproducts.id} className='hover:text-sky-500 hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{ourproducts.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Our Company</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {company.map((company)=>(
                            <li key={company.id} className='hover:text-green-500 hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{company.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-white text-[1.2rem] max-[600px]:bg-slate-400 max-[600px]:w-full max-[600px]:text-start max-[600px]:text-black max-[600px]:text-[1rem] max-[600px]:px-[1rem] rounded-md'>Help & Support</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] max-[600px]:hidden'>
                        {helpsupport.map((helpsupport)=>(
                            <li key={helpsupport.id} className='hover:text-rose-500 hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{helpsupport.title}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
            <div className="max-[600px]:pt-[5rem]">
            <div className='hidden max-[600px]:block '>
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
            </div>
        </footer>
    )
}