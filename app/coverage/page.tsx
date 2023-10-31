export default function Coverage(){
    return(
        <section>
            <div className='flex flex-col gap-3 px-3 py-5 bg-blue-800 rounded-xl'>
                        <select className='text-black rounded-md h-[2rem]' name="" id="" placeholder='Select area'>
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
                        <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[1rem]'>Sales Center</h2>
                            <span className='text-[14px]'>021 1234 5678</span>
                            <span className='text-[14px]'>0817 1234 5678</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[1rem]'>Customer Service</h2>
                            <span className='text-[14px]'>021 1234 5678</span>
                        </div>
                        </div>
                    </div>
        </section>
    )
}