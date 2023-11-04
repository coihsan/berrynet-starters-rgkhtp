import {feature} from '@/app/components/constants/data'
export default function Feature() {
    return (
        <div className="mx-auto max-w-screen-xl py-[5rem] ">
            <h1 className='text-5xl mb-[2rem] text-center font-bold'>berrynet Feature</h1>
            <div className='grid grid-cols-2 gap-3'>
                {feature.map((item) =>(
                    <div className='p-5 rounded-lg border border-zinc-700 flex items-center gap-5'>
                        <span className='fill-white text-3xl'>{item.icon}</span>
                        <div>
                            <h2 className='text-2xl font-bold'>{item.title}</h2>
                            <p className='text-zinc-400'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}