import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import Overlay from '@/components/overlay'
import DarkMode from '@/ui/toggle/darkmode'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'berrynet - Internet Provider',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Overlay />
      </body>
    </html>
  )
}
