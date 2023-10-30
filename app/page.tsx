import Image from 'next/image'
import Hero from '@/components/hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#070d2b] to-[#000312]">
      <Hero />
      <hr className='mt-[100px] mb-[100px] w-full h-px border-none ' />
      <Footer />
      <hr className='mt-[100px] mb-[100px] w-full h-px border-none ' />
    </main>
  )
}
