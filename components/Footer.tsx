import {quicklink, ourproducts, company, helpsupport} from '@/components/constants/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className='containers-center'>
            <div className='flexCenter gap-10'>
                <div>
                    <h2>Sales Center</h2>
                </div>
                <div>
                    <h2>Customer Service</h2>
                </div>
            </div>
            <div className='flex justtify-between gap-10'>
                <div className='max-w-lg flex flex-col gap-3 '>
                <Image
                src="/berrynet.svg"
                alt="berrynet Logo"
                className="dark:invert"
                width={220}
                height={24}
                priority
                />
                    <h2>Our company is committed to providing the best possible internet service to our customers. We offer a variety of plans to fit every budget and need, and we guarantee fast, reliable connections.</h2>
                </div>
                <div className='grid grid-cols-4 gap-5  w-full'>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem] '>
                        {quicklink.map((quicklink)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Our Products</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {ourproducts.map((ourproducts)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{ourproducts.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Our Company</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {company.map((company)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{company.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-indigo-500 text-[1.2rem]'>Help & Support</h3>
                    <ul className='flex flex-col gap-2 pt-[1rem]'>
                        {helpsupport.map((helpsupport)=>(
                            <li className='hover:translate-x-[5px] text-[14px] transition-transform ease-in-out cursor-pointer'>{helpsupport.title}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}