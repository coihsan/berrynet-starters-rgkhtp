
import Link from 'next/link'
import { lusitana } from '@/app/ui/fonts';
import {SERVICESDATA} from '@/app/components/constants/data'
import Image from 'next/image'

export function Segmentation(){

    return (
        <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-3 max-w-screen-xl '>
            {SERVICESDATA.map((data) =>(
                <Link
                    style={data.theme}
                    href={data.path}
                    className="flexCenter gap-3 group rounded-lg w-full p-5 transition-all hover:translate-y-[-5px] ease-in-out"
                    rel="noopener noreferrer"
                    >
                    <h2 className={`text-1xl font-medium`}>{data.title}</h2>
                    <div className='group-hover:bg-white text-indigo-700 bg-transparent py-1 px-5 transition-all rounded-full flexCenter gap-2'>
                        <svg className='fill-blue-50 group-hover:fill-blue-950 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </div>
                </Link>
            ))}
        </div>
    )
}

const Hero = () =>{
    return (
        <section className='px-2 flexBetween h-[100vh] gap-5 w-full max-[600px]:flex-col-reverse max-[600px]:h-full max-[600px]:py-[5rem] max-w-screen-xl mx-auto'>
            <div>
            <h1 className={'text-6xl max-w-screen-lg max-[600px]:text-4xl font-bold text-white '}>Experience the Difference <br /> of High-Speed Internet</h1>
            <p className='text-zinc-300 text-2xl pt-[1rem] max-w-3xl max-[600px]:text-[1.2rem] leading-normal'>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</p>

            <div className='pt-9 flex flex-col gap-3'>
                <p className='mb-5 text-[1.2rem] px-5 py-2 rounded-full bg-gradient-to-br from-purple-900/50 to-sky-900/30 border border-zinc-50/20 w-max'>What type of internet do you need?</p>
                <Segmentation />
            </div>
            </div>
            <img className='w-[400px] max-[600px]:w-[200px] h-auto' src="/storm.webp" alt='storm' />
        </section>
    )
}

export default Hero