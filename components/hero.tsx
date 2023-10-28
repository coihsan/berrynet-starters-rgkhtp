import Link from 'next/link'

const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        desc: "Get fast and unlimited internet service with attractive service packages.",
        path: '/Homenet',
        icon: '#',
    },
    {
        id: '02',
        title: 'Apartment Internet',
        desc: "We are also available for internet services in many Apartments that have partnered with us.",
        path: '/Apartmentnet',
        icon: '#'
    },
    {
        id: '03',
        title: 'Business Internet',
        desc: "Do you need dedicated internet service or just broadband with mega-bandwith? We have it!",
        path: '/Businessnet',
        icon: '#'
    }
]
export function Segmentation(){
    return (
        <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-5 max-w-screen-xl'>
            {SERVICES_DATA.map((data) =>(
                <div className={'group rounded-lg w-full transition-all hover:translate-y-[-5px] ease-in-out bg-indigo-600 px-5 py-10'}>
                    <Link
                    href={data.path}
                    className="flexColCenter gap-3"
                    rel="noopener noreferrer"
                    >
                    <h2 className={`text-4xl font-medium`}>{data.title}</h2>
                    <p className={`m-0 text-sm text-center`}>{data.desc}</p>
                    <div className='group-hover:bg-white text-indigo-700 bg-white py-2 px-5 transition-all rounded-full flexCenter'>
                        <p className="">Visit</p>
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

const Hero = () =>{
    return (
        <section className='px-2 flexColCenter gap-5 w-full h-[100vh]'>
            <center className='text-7xl max-w-screen-lg max-[600px]:text-4xl font-bold text-white '>Experience the Difference of High-Speed Internet</center>
            <center className='text-neutral-500'>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</center>
            <div className='pt-10 flexColCenter gap-3'>
                <center className='mb-5 text-[1.5rem]'>What type of internet do you need?</center>
                <Segmentation />
            </div>
        </section>
    )
}

export default Hero