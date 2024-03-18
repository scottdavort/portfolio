// The root layout is defined at the top level of the app directory and applies to all routes. 
// This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.
import { usePathname } from 'next/navigation';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ScrollingFeature from './components/ScrollingFeature'
import SideBar__function from './components/SideBar__function'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scott Manley | Network App',
  description: 'Interactive network app for Scott Manley designed with Next.js and Tailwind CSS',
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
        <Hero />
        <main className='realtive-overflow-hidden'>
       <ScrollingFeature />
          {children }
        </main>
      <Footer />
      </body>
    </html>
  )
}
