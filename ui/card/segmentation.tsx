import Link from 'next/link'

const SERVICES_DATA = [
    {
        id: '01',
        title: 'Home Internet',
        desc: 'Lorem ipsum dolor sit amet',
        path: '#',
        icon: '#'
    }
]
export default function Segmentation(){
    return (
        <div>
            {SERVICES_DATA.map((data) =>(
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <Link href={data.path} className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Visit</Link>
                </div>
            ))}
        </div>
    )
}