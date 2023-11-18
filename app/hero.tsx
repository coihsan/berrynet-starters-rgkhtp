
"use client"
import Link from 'next/link'
import {motion} from 'framer-motion'
import { lusitana } from '@/app/ui/fonts';
import {SERVICESDATA} from '@/app/components/constants/data'
import Image from 'next/image'

export function Segmentation(){

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    return (
        <motion.div 
            variants={container} 
            initial="hidden"
            animate="visible"
            className='grid grid-cols-3 max-[600px]:grid-cols-1 max-[600px]:w-full gap-3'>
            {SERVICESDATA.map((services) =>(
                <Link
                    
                    key={services.id}
                    href={services.path}
                    className="bg-gradient-to-r from-sky-500 to-pink-500  group rounded-full w-full p-[1px] transition-all ease-linear hover:translate-y-[-5px] ease-in-out hover:shadow-lg hover:shadow-pink-900"
                    rel="noopener noreferrer"
                    >
                    <motion.div 
                        variants={item}
                        className='h-full w-full rounded-full flexCenter gap-3 p-3 bg-gradient-to-r transition-all ease-linear from-blue-950 to-purple-950 hover:from-blue-600 hover:to-purple-600'>
                        <span>{services.icon}</span>
                        <h2 className={`text-[20px] font-bold`}>{services.title}</h2>
                        <motion.div variants={item} className='bg-transparent transition-all rounded-full flexCenter gap-2'>
                            <svg className='fill-white inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </motion.div>
                    </motion.div>
                </Link>
            ) )}
        </motion.div>
    )
}

const Hero = () =>{
    return (
        <section className='px-2 flexBetween h-[100vh] gap-5 w-full max-[600px]:flex-col max-[600px]:h-full max-[600px]:pt-[8rem] max-[600px]:pb-[5rem] containers-center mx-auto'>
            <div>
            <motion.h1 
            initial={{ opacity: 0 }}
            transition={{ backInOut: [0.17, 0.67, 0.83, 0.67] }}
            whileInView={{ opacity: 1 }}
            className={'text-6xl max-w-screen-lg max-[600px]:text-center max-[600px]:text-4xl font-bold text-white '}>Experience the Difference <br /> of High-Speed Internet</motion.h1>
            <p className='max-[600px]:text-center text-zinc-300 text-2xl pt-[1rem] max-w-3xl max-[600px]:text-[1.2rem] leading-normal'>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</p>

            <div className='pt-9 flex flex-col gap-3 max-[600px]:items-center'>
                <div className='mb-5 text-[1rem] font-medium w-max'>
                    <p>What type of internet do you need?</p>
                </div>
                <Segmentation />
            </div>
            </div>
            <Image className='w-[400px] max-[600px]:w-[200px] h-auto' src={"/storm.webp"} width={200} height={50} alt='storm' />
        </section>
    )
}

export default Hero
