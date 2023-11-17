"use client"
import {motion} from 'framer-motion'

import {feature} from '@/app/components/constants/data'
export default function Feature() {
    return (
        <div className="mx-auto containers-center py-[5rem] ">
            <h1 className='text-5xl mb-[2rem] text-center font-bold'>berrynet Feature</h1>
            <div className='grid grid-cols-2 gap-3 p-5 border border-zinc-700 rounded-xl max-[600px]:grid-cols-1'>
                {feature.map((item) =>(
                    <motion.div 
                    animate={{y: 140, opacity: 0}}
                    transition={{ backInOut: [0.17, 0.67, 0.83, 0.67] }}
                    whileInView={{ y: 0, opacity: 1}}
                    key={item.id}
                    className='p-5 rounded-lg bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-700 flex items-start gap-5 shadow-sm shadow-zinc-700 '>
                        <div className='fill-white text-3xl max-w-[30px] w-full'>{item.icon}</div>
                        <div className="flex flex-col gap-2">
                            <h2 className='text-2xl font-bold max-[600px]:text-[1rem] leading-none'>{item.title}</h2>
                            <p className='text-zinc-400 max-[600px]:text-[14px]'>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}