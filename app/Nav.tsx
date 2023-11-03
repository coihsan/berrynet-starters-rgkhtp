'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import MenuProducts from './menuproducts'
const navitems = [
    {
        title: "Why berrynet?",
        path: "/whyberrynet",
    },
    {
        title: "About berrynet",
        path: "/about",
    },
    {
        title: "Products",
        path: "/products",
    },
    {
        title: "Coverage",
        path: "/coverage",
    },
]

export default function Nav(){
    const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

    return (
        <nav onMouseEnter={() => setHovering(null)} className='fixed top-0 left-0 backdrop-blur-xl bg-black/70 w-full py-5'>
            <div className='flexBetween gap-3 max-w-screen-xl mx-auto'>
                <Image src="/berrynet.svg" width={160} height={60} alt='berrynetLogo' />
                <div className='flex gap-2'>
                    <div className='flex relative items-center gap-2'>
                        <Link className='stylingNav' href="#">Home</Link>
                        <Link
                            onMouseEnter={(event) => {
                                setHovering(0);
                                setPopoverLeft(event.currentTarget.clientLeft);
                            }}
                            className='stylingNav' href="#">Products</Link>
                        <Link className='stylingNav' href="#">Why berrynet?</Link>
                        <Link className='stylingNav' href="#">About berrynet</Link>
                        <Link className='stylingNav' href="#">Coverage</Link>
                        {typeof hovering === 'number' && (
                            
                            <div
                                style={{
                                    left: popoverLeft ?? 0
                                }}
                             className="transition-all absolute top-12 shadow bg-white p-5 rounded w-[600px] ...">
                            {/* Our popover */}
                            </div>
                        )}
                    </div>
                    <Link className='px-7 py-2 rounded-full bg-gradient-to-r from-pink-600 to-yellow-700 font-medium' href="#">Call Us</Link>
                </div>
            </div>
        </nav>
    )
}