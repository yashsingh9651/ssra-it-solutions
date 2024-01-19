import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SSRA IT SOLUTIONS',
  description: 'We bring a wealth of expertise in various IT domains, including network infrastructure, cybersecurity, cloud computing, software development, and more. Whether you are a small startup or a large enterprise, our team of seasoned professionals is dedicated to helping you harness the power of technology to drive your business forward.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden relative`}>
        <Image src={'/images/bg_1.jpg'} alt='Hero_BG' width={1000} height={1000} className='w-screen h-screen top-0 left-0 fixed -z-10 object-cover'></Image>
        <div className='container mx-auto'>{children}</div></body>
    </html>
  )
}
