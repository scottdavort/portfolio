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
  
  // State to manage the visibility of the sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
// set useState to false
  useEffect(() => {
    setIsSidebarVisible(false);
  }, [pathname]);


  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        
        {/* OneLoad set useState to false*/}
        

      {/* set the useState to false */}
    
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
