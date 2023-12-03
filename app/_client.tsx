"use client"
import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function ClientRootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    )
}
