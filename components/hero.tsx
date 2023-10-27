import Link from 'next/link'

const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '#',
        icon: '#'
    },
    {
        id: '01',
        title: 'Apartment Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '#',
        icon: '#'
    },
    {
        id: '01',
        title: 'Business Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '#',
        icon: '#'
    }
]
export function Segmentation(){
    return (
        <div className='grid grid-cols-3 gap-5 max-w-screen-xl mx-atuo '>
            {SERVICES_DATA.map((data) =>(
                <div className='rounded-xl group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
                    <Link
                    href={data.path}
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        {data.title}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{data.desc}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

const Hero = () =>{
    return (
        <section className='pt-24 px-2 max-w-screen-xl mx-atuo bg-none'>
            <center className='text-7xl max-[600px]:text-4xl font-medium'>Experience the Difference of High-Speed Internet</center>
            <center>Get the fastest and most reliable internet speeds in your area, with plans to fit every budget.</center>
            <Segmentation />
        </section>
    )
}

export default Hero