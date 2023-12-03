import HeroSection from '@/hoc/hero'
import Text from '@/hoc/hero/text'
import Image from 'next/image'
import WhySustainability from '@/hoc/Why-sustainability'
import Text1 from '@/hoc/Why-sustainability/text'
export default function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <HeroSection/>
      
      
      <div className='max-w-3xl'>
        <Text/>
      
      </div>
      <WhySustainability/>
      <div className='max-w-3xl'>
        <Text1/>
        </div>
    </div>
  )
}
