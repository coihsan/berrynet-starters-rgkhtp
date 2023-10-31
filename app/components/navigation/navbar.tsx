import Link from 'next/link'
import Image from 'next/image'
import { data } from 'autoprefixer'
const navitems = [
    {
        title: "Home",
        path: "#",
    },
    {
        title: "Why berrynet?",
        path: "#",
    },
    {
        title: "About berrynet",
        path: "app/pages/aboutus.tsx",
    },
    {
        title: "Projects",
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
        },
        icon: <svg className='w-[20px] fill-white' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Launching"><path d="M12.3638,41.0681S8.0312,44.5,7.7561,53.93A1.9032,1.9032,0,0,0,9.68,55.8808c9.1235-.17,12.8618-4.6343,12.8618-4.6343a7.3926,7.3926,0,0,0,0-10.1784C19.7314,38.2574,15.5652,38.394,12.3638,41.0681Z"/><path d="M32.5049,44.4262a11.424,11.424,0,0,1,2.2751,5.85,34.1291,34.1291,0,0,1-.8711,9.8921,1.4354,1.4354,0,0,0,2.0733,1.5869c7.6938-4.0539,14.0468-11.8882,9.9934-22.1077A32.1494,32.1494,0,0,1,32.5049,44.4262Z"/><path d="M13.33,28.8247a11.4207,11.4207,0,0,1,5.8552,2.2807A31.9474,31.9474,0,0,1,23.9631,17.63C13.741,13.5725,5.9065,19.9291,1.8484,27.6235a1.42,1.42,0,0,0,.1279,1.5332,1.4348,1.4348,0,0,0,1.46.539A34.1864,34.1864,0,0,1,13.33,28.8247Z"/><path d="M60.4182,5.3488a2.5779,2.5779,0,0,0-2.1538-2.1535,32.8033,32.8033,0,0,0-9.4988-.0391A13.47,13.47,0,0,0,60.4582,14.841,32.8093,32.8093,0,0,0,60.4182,5.3488Z"/><path d="M46.1135,3.6481a27.7164,27.7164,0,0,0-12.65,6.7024C21.789,21.16,21.831,32.1193,21.831,32.1193l9.6629,9.6629s10.96.0421,21.7688-11.6319a27.7158,27.7158,0,0,0,6.7036-12.6561A16.1679,16.1679,0,0,1,46.1135,3.6481ZM41.6621,27.583a5.64,5.64,0,1,1,5.64-5.64A5.64,5.64,0,0,1,41.6621,27.583Z"/></g></svg>
    }
]

export default function Navbar(){
    return (
        <nav className="fixed max-[768px]:p-[1rem] w-[100%] backdrop-blur-xl bg-black/40 h-auto">
            <div className="lg:p-4 items-center justify-between text-sm lg:flex max-w-screen-xl mx-auto">
                    <Link href='/' className="font-bold hover:opacity-[0.7]">
                        <Image className='max-[600px]:w-[120px]' src='/berrynet.svg' alt='Logo' width={160} height={60} priority/>
                    </Link>
                    <div className='flex items-center gap-3 max-[600px]:hidden'>
                    {navitems.map((menu) =>(
                        <Link style={menu.theme} href={menu.path} className='flex gap-2 font-bold text-white hover:text-indigo-100 px-5 py-2 hover:bg-indigo-600 rounded-full transition-all'>{menu.icon} {menu.title}</Link>
                    ))}
                    </div>
            </div>
        </nav>
    )
}