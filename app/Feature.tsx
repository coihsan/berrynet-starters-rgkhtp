import {feature} from '@/app/components/constants/data'
export default function Feature() {
    return (
        <div className="mx-auto containers-center py-[5rem] ">
            <h1 className='text-5xl mb-[2rem] text-center font-bold'>berrynet Feature</h1>
            <div className='grid grid-cols-2 gap-3 max-[600px]:grid-cols-1'>
                {feature.map((item) =>(
                    <div key={item.id} className='p-5 rounded-lg border border-zinc-700 flex items-center gap-5'>
                        <span className='fill-white text-3xl'>{item.icon}</span>
                        <div>
                            <h2 className='text-2xl font-bold max-[600px]:text-[1rem]'>{item.title}</h2>
                            <p className='text-zinc-400 max-[600px]:text-[14px]'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}