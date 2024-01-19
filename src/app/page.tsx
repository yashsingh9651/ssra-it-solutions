import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='xl:w-3/4 w-full mx-auto'>
      <Hero/>
    </div>
    </>
  )
}
