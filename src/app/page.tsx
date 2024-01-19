import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='w-3/4 mx-auto'>
      <Hero/>
      <div className='h-screen w-screen'></div>
      <div className='h-screen w-screen'></div>
    </div>
    </>
  )
}
