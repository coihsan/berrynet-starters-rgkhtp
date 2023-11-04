import Image from 'next/image'
import Hero from '@/app/hero'
import Footer from '@/app/Footer'
import './globals.css'
import Feature from './Feature';
export default function Home() {
  return (
    <main className="herograd">
      <Hero />
      <Feature/>
    </main>
  )
}
