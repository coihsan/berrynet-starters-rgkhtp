'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {MenuProducts} from './menuproducts'
import {productsIcon} from './Icons'

export default function Nav(){
    const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);


    return (
        <nav onMouseEnter={() => setHovering(null)} className='fixed top-0 left-0 backdrop-blur-xl bg-black/40 w-full py-5'>
            <div className='flexBetween gap-3 max-w-screen-xl mx-auto px-[1rem]'>
                <Image className=' max-[600px]:w-[120px]' src="/berrynet.svg" width={160} height={60} alt='berrynetLogo' />
                <div className='flex gap-2 max-[600px]:flex-col  max-[600px]:hidden'>
                    <div className='flex relative items-center gap-2 max-[600px]:flex-col max-[600px]:absolute  max-[600px]:left-0  max-[600px]:top-[6rem]'>
                        <Link className='stylingNav' href="/">Home</Link>
                        <Link 
                            onMouseEnter={(event) => {
                                setHovering(0);
                                setPopoverLeft(event.currentTarget.clientLeft);
                            }}
                            className='stylingNav' href="/products">Products {productsIcon.chevron}</Link>
                        <Link 
                        className='stylingNav' href="/whyberrynet">Why berrynet?</Link>
                        <Link className='stylingNav' href="/about">About berrynet</Link>
                        <Link className='stylingNav' href="/coverage">Coverage</Link>
                        {typeof hovering === 'number' && (
                            
                            <div
                                style={{
                                    left: popoverLeft ?? 0
                                }}
                             className="transition-all absolute top-16 shadow bg-zinc-950/95 backdrop-blur-xl p-2 rounded w-[400px] ...">
                            <MenuProducts />
                            </div>
                        )}
                    </div>
                    <Link className='flexCenter gap-2 px-7 py-2 rounded-full bg-gradient-to-r from-pink-600 to-yellow-700 font-medium ' href="#"><Image className='fill-white' width={16} height={16} src='/rocket.svg' alt='rocket'/> Call Us</Link>
                </div>
            </div>
        </nav>
    )
}