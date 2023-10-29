import Image from 'next/image'
import Hero from '@/components/hero'
import Footer from '@/components/Footer'
import CekArea from '@/components/cekarea'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <hr className='mt-[100px] mb-[100px] w-full h-px border-none ' />
      <CekArea />
      <hr className='mt-[100px] mb-[100px] w-full h-px border-none ' />
      <Footer />
    </main>
  )
}
