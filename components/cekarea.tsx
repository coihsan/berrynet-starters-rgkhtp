export function CekArea(){
    return(
        <div className="gap-3 containers-center max-[600px]:flex-col mx-auto flexCenter">
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="1.8em" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
            <input className='h-[2rem] max-[600px]:w-[100%] rounded-full bg-blue-100 pl-[1rem] outline-none placeholder:text-slate-800 text-slate-900' type="search" name="" id="" placeholder="Check Area" />
        </div>
    )
}