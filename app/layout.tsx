'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills'; // New Skills component
import Timeline from './components/Timeline'; // New Timeline component
import SideBar__function from './components/SideBar__function';
import ScrollingFeature from './components/MainContent'; // New ScrollingFeature component
import { useRouter } from 'next/router';
import MainContent from './components/MainContent';

const inter = Inter({ subsets: ['latin'] });

/**
 * Component representing the application's root layout. This layout is applied to all routes.
 *
 * @param {React.ReactNode} children The child components to be rendered within the layout.
 * @returns The root layout component.
 */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Use the current path to conditionally render components


  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <Hero />
        <main className='relative overflow-hidden'>
          {pathname === '/' && (
            <>
            <MainContent /> {/* Your existing ScrollingFeature component */}
              <Skills /> {/* Render the Skills component only on the root path */}
              <Timeline /> {/* Render the Timeline component only on the root path */}
            </>
          )}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}



