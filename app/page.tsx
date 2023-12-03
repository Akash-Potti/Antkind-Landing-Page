"use client"
import HeroSection from '@/hoc/hero'
import Text from '@/hoc/hero/text'
import Image from 'next/image'
import WhySustainability from '@/hoc/Why-sustainability'
import Text1 from '@/hoc/Why-sustainability/text'
import Team from '@/hoc/Team'
import ContactUs from '@/hoc/Contact'

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <HeroSection />

      <div className='max-w-6xl px-4 lg:px-2 xl:px-0'>
        <Text />
        <WhySustainability />
        <Text1 />
        <Team />
        <ContactUs />
      </div>
    </div>
  )
}
