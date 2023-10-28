import Link from 'next/link'

const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '/Homenet',
        icon: '#'
    },
    {
        id: '02',
        title: 'Apartment Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '/Apartmentnet',
        icon: '#'
    },
    {
        id: '03',
        title: 'Business Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '/Businessnet',
        icon: '#'
    }
]
export function Segmentation(){
    return (
        <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-5 w-full max-w-screen-xl mx-atuo '>
            {SERVICES_DATA.map((data) =>(
                <div className='rounded-xl group rounded-lg border border-transparent px-5 py-4 transition-all hover:translate-y-[-5px] hover:border-gray-300 ease-in-out hover:bg-indigo-100 hover:dark:border-indigo-700 hover:dark:bg-indigo-800/30'>
                    <Link
                    href={data.path}
                    className=""
                    rel="noopener noreferrer"
                    >
                    <h2 className={`mb-3 text-2xl font-bold`}>{data.title}</h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        {data.desc}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

const Hero = () =>{
    return (
        <section className='px-2 flexColCenter gap-5 w-full mx-atuo h-[100vh]'>
            <center className='text-7xl max-w-screen-lg max-[600px]:text-4xl font-medium'>Experience the Difference of High-Speed Internet</center>
            <center>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</center>
            <div className='pt-10 flexColCenter gap-3'>
                <center>What type of internet do you need?</center>
                <Segmentation />
            </div>
        </section>
    )
}

export default Hero