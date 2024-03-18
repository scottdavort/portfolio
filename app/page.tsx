'use client';
// root main page ui route for the app

import Head from 'next/head';
import { useState, useEffect, useRef, SetStateAction } from 'react'; // Import the useEffect hook
import styles from './styles/Home.module.css';
import SideBar__content from './components/SideBar__content'

// Define the message type for the conversation
interface Message {
  role: string;
  content: string;
}

// Function to establish WebSocket connection and get messages from the backend API with the threadId
export default function Home() {

  // Constants
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Add a new state for the sidebar
  const [isLoading, setIsLoading] = useState(false);
  

  
    // Adjusted styles for scrollable response section
    const scrollableResponseStyle = {
      marginBottom: '60px', // Adds space at the bottom, so the last message isn't hidden behind the floating prompt
      overflowY: 'auto', // Enables vertical scrolling
      maxHeight: 'calc(100vh - 200px)', // Adjusts the height based on viewport height minus other UI elements
    };

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

 
  

// Stream text to the UI using a typewriter effect
const typeMessage = (message: string, callback: (arg0: any) => void) => {
  let index = 0;
  const interval = setInterval(() => {
    index++;
    callback(message.substring(0, index));
    if (index === message.length) {
      clearInterval(interval);
    }
  }, 50); // Adjust the speed as needed
};


  return (
    <>
      <Head>
        <title>Scott Manley | Virtual Interview</title>
      </Head>



      <div className="bg-gray-700 min-h-screen flex">

        {/* Toggle Icon */}
        <div className="fixed top-20 left-20 cursor-pointer z-10" onClick={toggleSidebar}>
          <div className="grid grid-cols-3 gap-1 w-8 h-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300"></div>
            ))}
          </div>
        </div>


        {/* Collapsible Sidebar */}
        <div className={`${isSidebarVisible ? 'w-1/5' : 'hidden'} min-w-[100px] bg-black h-full fixed left-0 top-0 bottom-0 transition-width duration-300`}>
          {/* SideBar content */}
              <SideBar__content />
        </div>

        {/* Main Content Container */}
        <div className={`${isSidebarVisible ? 'ml-1/10' : 'ml-0'} p-8 flex justify-center items-center transition-all duration-300 w-full`}>
          <div className="bg-black text-white max-w-4xl w-full rounded-lg shadow-xl overflow-hidden">
            {/* Header */}







          </div>
        </div>
      </div>
    </>
  );
}
