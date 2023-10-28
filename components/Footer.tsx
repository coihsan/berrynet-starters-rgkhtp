import {quicklink, ourproducts, company, helpsupport} from '@/components/constants/data'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className='flex justtify-between containers-center'>
            <div className='max-w-lg'>
                <h2>As the best internet provider with ultra-fast connections, we now offer a variety of service types and internet packages that suit your needs.</h2>
            </div>
            <div className='grid grid-cols-4 gap-5'>
            <div>
                <h3 className='text-indigo-500 text-[1.2rem]'>Quick Links</h3>
                <ul className='flex flex-col gap-3 pt-[1rem] '>
                    {quicklink.map((quicklink)=>(
                        <li className='hover:translate-x-[5px] transition-transform ease-in-out cursor-pointer'><Link className='' href={quicklink.path}>{quicklink.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-indigo-500 text-[1.2rem]'>Our Products</h3>
                <ul className='flex flex-col gap-3 pt-[1rem]'>
                    {ourproducts.map((ourproducts)=>(
                        <li className='hover:translate-x-[5px] transition-transform ease-in-out cursor-pointer'>{ourproducts.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-indigo-500 text-[1.2rem]'>Our Company</h3>
                <ul className='flex flex-col gap-3 pt-[1rem]'>
                    {company.map((company)=>(
                        <li className='hover:translate-x-[5px] transition-transform ease-in-out cursor-pointer'>{company.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-indigo-500 text-[1.2rem]'>Our Products</h3>
                <ul className='flex flex-col gap-3 pt-[1rem]'>
                    {helpsupport.map((helpsupport)=>(
                        <li className='hover:translate-x-[5px] transition-transform ease-in-out cursor-pointer'>{helpsupport.title}</li>
                    ))}
                </ul>
            </div>
            </div>
        </footer>
    )
}