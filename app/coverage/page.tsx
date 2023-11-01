export default function Coverage(){
    return(
        <section className="max-w-screen-xl mx-auto py-[10rem]">
            <h1 className="text-3xl text-center pb-[2rem]">Find berrynet in your area</h1>
                    <div className='flex flex-col gap-3 max-w-3xl mx-auto bg-rose-800'>
                        <select className='text-black bg-white max-w-md rounded-md h-[2rem]' name="" id="" placeholder='Select area'>
                            <option value="01" disabled>Select Area :</option>
                            <option value="01">Jakarta Barat</option>
                            <option value="Jakarta">Jakarta Utara</option>
                            <option value="Banten">Tangerang Kota</option>
                            <option value="Banten">Tangerang Selatan</option>
                            <option value="Bogor">Bogor</option>
                            <option value="Bekasi">Bekasi</option>
                            <option value="Surabaya">Surabaya</option>
                            <option value="Bandung">Bandung</option>
                        </select>
                        
                    </div>
        </section>
    )
}