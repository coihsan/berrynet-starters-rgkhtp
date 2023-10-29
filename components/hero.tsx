import Link from 'next/link'
import { CekArea } from './cekarea'

const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        path: '/Homenet',
        icon: '#',
        theme: {
            backgroundColor: "#4f46e5" ,
        }
    },
    {
        id: '02',
        title: 'Apartment Internet',
        path: '/Apartmentnet',
        icon: '#',
        theme: {
            backgroundColor: "#ca8a04" ,
        }
    },
    {
        id: '03',
        title: 'Business Internet',
        path: '/Businessnet',
        icon: '#',
        theme: {
            backgroundColor: "#059669" ,
        }
    }
]
export function Segmentation(){
    return (
        <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-5 max-w-screen-xl '>
            {SERVICES_DATA.map((data) =>(
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
        <section className='px-2 flexColCenter gap-5 w-full pt-[10rem] max-[600px]:pt-[7rem] '>
            <center className='text-6xl max-w-screen-lg max-[600px]:text-4xl font-bold text-white '>Experience the Difference of <br /> High-Speed Internet</center>
            <center className='text-neutral-500 text-2xl max-w-2xl max-[600px]:text-[1.2rem] leading-normal'>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</center>
            <CekArea />
            <div className='pt-5 flexColCenter gap-3'>
                <center className='mb-5 text-[1.5rem] max-[600px]:text-[1rem]'>What type of internet do you need?</center>
                <Segmentation />
            </div>
        </section>
    )
}

export default Hero