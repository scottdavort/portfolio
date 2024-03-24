'use client';
// root main page ui route for the app

import Head from 'next/head';
import { useState, useEffect, useRef, SetStateAction } from 'react'; // Import the useEffect hook
import styles from './styles/Home.module.css';

// Define the message type for the conversation
interface Message {
  role: string;
  content: string;
}

// Function to establish WebSocket connection and get messages from the backend API with the threadId
export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  
  // Adjusted styles for scrollable response section
  const scrollableResponseStyle = {
    marginBottom: '60px', // Adds space at the bottom, so the last message isn't hidden behind the floating prompt
    overflowY: 'auto', // Enables vertical scrolling
    maxHeight: 'calc(100vh - 200px)', // Adjusts the height based on viewport height minus other UI elements
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
        <title>Scott Manley | Portfolio</title>
      </Head>

      <div className="bg-gray-700 min-h-screen flex justify-center items-center">
        {/* Main Content Container */}
        <div className="p-8 flex justify-center items-center w-full">
          <div className="bg-blue-600 text-white max-w-4xl w-full rounded-lg shadow-xl overflow-hidden">
            {/* Header */}
            {/* Add your main content here */}
          </div>
        </div>
      </div>
    </>
  );
}
