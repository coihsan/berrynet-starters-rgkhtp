export default function Contact(){
    return(
        <section className="py-[10rem] max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p>Tell us about your interest and concern to help our team provide the best solution for your company</p>
            <form action="" className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-[2rem]">
                    <input className="text-black h-[50px] w-full px-5 rounded-md" type="text" placeholder="Your Name" />
                    <input className="text-black h-[50px] w-full px-5 rounded-md" type="text" placeholder="Nickname" />
                </div>
                <div className="flex flex-col gap-2">
                    <input className="text-black h-[50px] rounded-md px-5" type="email" name="" id="" placeholder="Work Email Address" />
                    <input className="text-black h-[50px] rounded-md px-5" type="number" name="" id="" placeholder="Mobile Phone Number" />
                </div>
                <button className="bg-pink-600 rounded-md px-8 py-3 w-max" type="submit">Next</button>
            </form>
        </section>
    )
}