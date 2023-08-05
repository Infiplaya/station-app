import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { BackgroundImage } from './components/background-image'
import { BgImageDropdown } from './components/dropdowns/bg-image-dropdown'
import { Navbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Station App',
    description: 'xddd',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <BackgroundImage />
            </body>
        </html>
    )
}
