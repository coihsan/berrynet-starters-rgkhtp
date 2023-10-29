import Link from 'next/link'
import Image from 'next/image'
import { data } from 'autoprefixer'
const navitems = [
    {
        title: "Home",
        path: "#",
    },
    {
        title: "Products",
        path: "#",
        submenu :
        {
            title: "Product 1",
            path: "#"
        },
    },
    {
        title: "Promotion",
        path: "#",
    },
    {
        title: "Help & Support",
        path: "#",
    },
    {
        title: "Check Area",
        path: "#",
    },
    {
        title: "Subscribe",
        path: "#",
        theme: {
            backgroundColor: "#be185d",
            paddingLeft: "2rem",
            paddingRight: "2rem",
        }
    }
]

export default function Navbar(){
    return (
        <nav className="fixed max-[768px]:p-[1rem] w-[100%] backdrop-blur-xl bg-white/10 h-auto">
            <div className="lg:p-4 items-center justify-between text-sm lg:flex max-w-screen-xl mx-auto">
                    <Link href='/' className="font-bold hover:opacity-[0.7]">
                        <Image className='max-[600px]:w-[120px]' src='/berrynet.svg' alt='Logo' width={160} height={60} priority/>
                    </Link>
                    <div className='flex items-center gap-3 max-[600px]:hidden'>
                    {navitems.map((menu) =>(
                        <Link style={menu.theme} href={menu.path} className='text-white hover:text-indigo-100 px-5 py-2 hover:bg-indigo-600 rounded-full transition-all'> {menu.title}</Link>
                    ))}
                    </div>
            </div>
        </nav>
    )
}