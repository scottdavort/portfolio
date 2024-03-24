'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills'; // Assuming Skills is a component
import Timeline from './components/Timeline'; // Assuming Timeline is a component
import SideBar__function from './components/SideBar__function';
import MainContent from './components/MainContent'; // Assuming MainContent is a component

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  


  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        

        {/* <SideBar__function isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} /> */}
        <main className='relative overflow-hidden'>
          {pathname === '/' && (
            <>
              <Hero />
              <MainContent />
              
              <Skills />
              <Timeline />
              {/* Additional content or components for the root path */}
            </>
          )}
         {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
