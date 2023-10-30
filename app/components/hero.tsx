import Link from 'next/link'
import { CekArea } from './cekarea'
import { lusitana } from '@/app/ui/fonts';
const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        path: 'app/homenet',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M357.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.4 8.6-12.7 22-8.5 34c87.1 25.3 155.6 94.2 180.3 181.6H464c26.5 0 48-21.5 48-48V256h32c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8.1-35.2l-208-192zM288 208c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V208zM24 256c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184c0 13.3 10.7 24 24 24s24-10.7 24-24c0-128.1-103.9-232-232-232zm8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM0 376c0 13.3 10.7 24 24 24c48.6 0 88 39.4 88 88c0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136c-13.3 0-24 10.7-24 24z"/></svg>,
        theme: {
            backgroundColor: "#4f46e5" ,
        }
    },
    {
        id: '02',
        title: 'Apartment Internet',
        path: '/Apartmentnet',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h89.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zM576 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM352 477.1c0 19.3 15.6 34.9 34.9 34.9H605.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H445.1c-51.4 0-93.1 41.7-93.1 93.1z"/></svg>,
        theme: {
            backgroundColor: "#ca8a04" ,
        }
    },
    {
        id: '03',
        title: 'Business Internet',
        path: '/Businessnet',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>,
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
            <center className={'text-6xl max-w-screen-lg max-[600px]:text-4xl font-bold text-white '}>Experience the Difference of <br /> High-Speed Internet</center>
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