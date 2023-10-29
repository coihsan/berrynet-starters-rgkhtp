export function CekArea(){
    return(
        <section className="w-[100%] max-[600px]:h-auto mx-auto flexCenter">
            <div className='flexBetween gap-9 containers-center max-[600px]:flex-col'>
                <div className="max-w-2xl">
                    <h2 className="text-[1rem]">Find <span className="font-bold">berrynet</span> in your city</h2>
                </div>
                <div className="flex gap-3 max-[600px]:flex-col">
                    <input className='h-[50px] w-80 max-[600px]:w-[100%] rounded-md pl-[1rem] outline-none placeholder:text-slate-800 text-slate-900' type="search" name="" id="" placeholder="Check Area" />
                    <button className="py-2 px-5 rounded md bg-fuchsia-600">Subscribe Now</button>
                </div>
            </div>
        </section>
    )
}