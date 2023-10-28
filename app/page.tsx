import Image from 'next/image'
import Hero from '@/components/hero'
import Footer from '@/components/Footer'
import CekArea from '@/components/cekarea'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CekArea />
      <Footer />
    </main>
  )
}
