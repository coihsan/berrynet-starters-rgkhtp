
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
        <nav>
            <div className="max-w-screen-xl fixed fixed left-0 top-0 right-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    {navitems.map((menu) =>(
                        
                    ))}
                </div>
            </div>
        </nav>
    )
}