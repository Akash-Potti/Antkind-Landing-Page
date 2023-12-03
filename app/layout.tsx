import type { Metadata } from 'next'
import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import ClientRootLayout from './_client';
import { Nunito } from 'next/font/google';


const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: 'ANTKIND',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientRootLayout>
        <body className={`min-w-[100vw] min-h-screen !overflow-x-hidden ${nunito.className}`} style={{
          backgroundColor: "rgba(201,255,188,1)",
          background: "linear-gradient(180deg, rgba(255,236,209,1) 0%, rgba(201,255,188,1) 100%)",
        }}>{children}</body>
      </ClientRootLayout>
    </html>
  )
}
