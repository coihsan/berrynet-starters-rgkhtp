import Link from 'next/link'
import Image from 'next/image'
import DarkMode from '../toggle/darkmode'
const navitems = [
    {
        title: "Home",
        path: "#",
    },
    {
        title: "Produk",
        path: "#",
        submenu :
        {
            title: "Produk 1",
            path: "#"
        },
    },
    {
        title: "Promo",
        path: "#",
    },
    {
        title: "Cek Area",
        path: "#",
    },
    {
        title: "Bantuan & Dukungan",
        path: "#",
    },
    {
        title: "Berlangganan",
        path: "#",
    },
]

export default function Navbar(){
    return (
        <nav className="fixed left-0 top-0 right-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="max-w-screen-xl mx-auto ">
                <div className="z-10 items-center justify-between font-mono text-sm lg:flex">
                    <Link href='#' className="font-bold">
                        <Image src='/berrynet.svg' alt='Logo' width={200} height={60} priority className=''/>
                    </Link>
                    <div className='flex items-center'>
                    {navitems.map((menu) =>(
                        <Link href={menu.path} className='px-5 py-2 hover:bg-neutral-100 hover:translate-y-[-5px] rounded-full transition-all'> {menu.title}</Link>
                    ))}
                    <DarkMode />
                    </div>
                </div>
            </div>
        </nav>
    )
}