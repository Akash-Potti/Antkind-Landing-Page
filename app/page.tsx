"use client"
import HeroSection from '@/hoc/hero'
import Text from '@/hoc/hero/text'
import Image from 'next/image'

import Team from '@/hoc/Team'
import ContactUs from '@/hoc/Contact'
import Footer from '@/hoc/footer/footer'
export default function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <HeroSection />

      <div className='max-w-6xl px-4 lg:px-2 xl:px-0'>
        <Text />
        <Team />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}
