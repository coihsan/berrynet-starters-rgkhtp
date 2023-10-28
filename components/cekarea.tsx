export default function CekArea(){
    return(
        <section className="w-[100%] h-[200px] bg-teal-800 mx-auto flexCenter">
            <div className='flexBetween gap-9 containers-center'>
                <div className="max-w-2xl">
                    <h2 className="text-[2rem]">Find <span className="font-bold">berrynet</span> in your city</h2>
                    <p>Enjoy the best internet with berrynet in your city. Check now whether your city is covered by the berrynet network.</p>
                </div>
                <div className="flex gap-3">
                    <input className='h-[50px] w-80 rounded-md pl-[1rem] outline-none placeholder:text-slate-800 text-slate-900' type="search" name="" id="" placeholder="Cek Area" />
                    <button className="py-2 px-5 rounded md bg-indigo-600">Subscribe Now</button>
                </div>
            </div>
        </section>
    )
}