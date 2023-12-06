import type { Metadata } from 'next'
import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import ClientRootLayout from './_client';
import { Roboto_Condensed } from 'next/font/google';


const nunito = Roboto_Condensed({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
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
        <body className={`min-w-[100vw] min-h-screen !overflow-x-hidden ${nunito.className} bg-background selection:bg-purple-200`}>{children}</body>
      </ClientRootLayout>
    </html>
  )
}
