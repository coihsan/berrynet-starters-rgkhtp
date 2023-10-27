import Link from 'next/link'
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
        <nav className="fixed left-0 top-0 right-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="max-w-screen-xl mx-auto ">
                <div className="z-10 items-center justify-between font-mono text-sm lg:flex">
                    <Link href='#' className="font-bold">Berrynet</Link>
                    <div className='flex items-center bg-rose-400 px-3 py-1'>
                    {navitems.map((menu) =>(
                        <Link href={menu.path} >{menu.title}</Link>
                    ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}