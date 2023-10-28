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
]

export default function Navbar(){
    return (
        <nav className="fixed w-[100%] backdrop-blur-xl bg-white/10 h-auto">
            <div className="lg:p-4 items-center justify-between text-sm lg:flex  max-w-screen-xl mx-auto">
                    <Link href='/' className="font-bold hover:opacity-[0.7]">
                        <Image src='/berrynet.svg' alt='Logo' width={200} height={60} priority/>
                    </Link>
                    <div className='flex items-center'>
                    {navitems.map((menu) =>(
                        <Link href={menu.path} className='text-white hover:text-indigo-100 px-5 py-2 hover:bg-indigo-600 rounded-full transition-all'> {menu.title}</Link>
                    ))}
                    <DarkMode />
                    </div>
            </div>
        </nav>
    )
}