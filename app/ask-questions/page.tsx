'use client';
// root main page ui route for the app

import Head from 'next/head';
import { useState, useEffect, useRef, SetStateAction } from 'react'; // Import the useEffect hook
import styles from '../styles/Home.module.css';
import Sidebar from '../components/SideBar__content'

// Define the message type for the conversation
interface Message {
  role: string;
  content: string;
}

// Function to establish WebSocket connection and get messages from the backend API with the threadId
export default function Home() {

  // Constants
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Add a new state for the sidebar
  const [threadId, setThreadId] = useState<string | null>(null); // Add a new state for the threadId
  const [currentRunId, setCurrentRunId] = useState<string | null>(null); // Add a new state for the current run ID
  const [conversation, setConversation] = useState<Message[]>([]); // Add a new state for the conversation
  const websocketRef = useRef<WebSocket | null>(null);;
  const [isLoading, setIsLoading] = useState(false);
  // API base URL and secret key
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Make sure this is set in your .env.local file
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || ''; // Default to an empty string if not set
  const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID || ''; // Default to an empty string if not set

    // Adjusted styles for floating prompt and scrollable response section
    const floatingPromptStyle = {
      position: 'fixed', // Makes the prompt section float above other content
      bottom: 0, // Aligns the prompt section at the bottom of the viewport
      width: '100%', // Ensures the prompt section spans the entire width of the viewport
      backgroundColor: '#1a202c', // Matches the color scheme of the prompt section
      padding: '10px 0', // Adds some padding around the prompt for better appearance
      borderTop: '1px solid #2d3748', // Adds a subtle border on top for separation
      zIndex: 1000, // Ensures the prompt section stays above other content
    };
  
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

  // Define types for TypeScript
  interface MessageContent {
    text: {
      value: string;
      annotations?: any[];
    };
    type: string;
  }
  // Define the message type for the conversation
  interface Message {
    role: string;
    content: string | MessageContent;
  }

  // Function to establish WebSocket connection and get messages from the backend API with the threadId
  const fetchMessages = () => {
    if (threadId) {
      const ws = new WebSocket(`ws://localhost:8000/ws/messages/${threadId}`);
      ws.onopen = () => {
        console.log("Connected to WebSocket for thread", threadId);
        ws.send(JSON.stringify({ secret_key: secretKey }));
      };
      ws.onmessage = (event) => {
        try {
          const response = JSON.parse(event.data);
          console.log("WebSocket message received:", response);

          if (response && Array.isArray(response.content)) {
            const newMessages = response.content.map((item: { text: { value: any; }; }) => ({
              role: response.role,
              content: item.text && item.text.value ? item.text.value : ''
            }));

            // Update conversation only if there are new messages
            setConversation(prev => {
              const existingMessageContents = new Set(prev.map(msg => msg.content));
              return [...prev, ...newMessages.filter((msg: Message) => !existingMessageContents.has(msg.content))];
            });
          } else {
            console.warn("Unexpected message format:", response);
            console.log("Unexpected message format:", response);
          }
        } catch (e) {
          console.error("Error parsing WebSocket message:", e);
          console.log("Error parsing WebSocket message:", e);
        }
      };
      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        console.log("WebSocket error:", error);
      };
      ws.onclose = () => {
        console.log("WebSocket disconnected");
      };
      websocketRef.current = ws;
    }
  };



  // Function to check run status via WebSocket
  const checkRunStatus = () => {
    if (threadId && currentRunId) {
      const statusWebSocket = new WebSocket(`ws://localhost:8000/ws/status/${threadId}/${currentRunId}`); // Adjust URL as needed

      statusWebSocket.onopen = () => {
        console.log("Connected to WebSocket for run status", threadId, currentRunId);
        // Send a message with the secret key
        statusWebSocket.send(JSON.stringify({ secret_key: secretKey }));
      };

      statusWebSocket.onmessage = (event) => {
        const statusResponse = JSON.parse(event.data);
        // Handle the status response here
        console.log("Run status:", statusResponse);
        // You may want to update some state or UI based on the run status
      };

      statusWebSocket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      statusWebSocket.onclose = () => {
        console.log("WebSocket for run status disconnected");
      };
    }
  };


  // Function to handle sending messages, creating threads, and initiating runs
  const handleSendMessage = async (content: string) => {
    
    // Add user's question to the conversation immediately
    setConversation(prev => [...prev, { role: 'user', content }]);






    // Function to create a new thread

    const createNewThread = async () => {
      const createThreadResponse = await fetch(`${apiUrl}/create_thread`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': secretKey,
        },
      });
      const createThreadData = await createThreadResponse.json();
      return createThreadData.id; // Extract the 'id' and return it
    };

    // Check if a thread exists, if not, create a new one
    const threadIDToUse = threadId ? threadId : await createNewThread();
    setThreadId(threadIDToUse); // Set the threadId state with the received ID

    // Step 2: Add the message to the thread
    await addMessageToThread(threadIDToUse, content);

    // Step 3: Initiate a run with the assistant
    const runAssistantResponse = await fetch(`${apiUrl}/run_assistant/${threadIDToUse}/${assistantId}`, {
      method: 'POST',
      headers: {
        'x-secret-key': secretKey,
      },
    });

    const runAssistantData = await runAssistantResponse.json();
    setCurrentRunId(runAssistantData.run_id);

    fetchMessages(); // Call the fetchMessages function
  };


  // Function to add a message to the thread
  const addMessageToThread = async (threadId: string, content: string) => {
    const addMessageUrl = `${apiUrl}/add_message/${threadId}?role=user&content=${encodeURIComponent(content)}`;
    const addMessageResponse = await fetch(addMessageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': secretKey,
      },
    });

    if (!addMessageResponse.ok) {
      console.error('Error adding message to thread:', await addMessageResponse.text());
      console.log('Error adding message to thread:', await addMessageResponse.text());
    }
  };

  // Function to fetch messages from the backend API
  useEffect(() => {
    if (threadId) {
      fetchMessages(); // Call the fetchMessages function
    }
    return () => {
      if (websocketRef.current) {
        websocketRef.current.close(); // Close the WebSocket connection when the component unmounts
      }
    };
  }, [threadId]); // Add threadId as a dependency


  // Add a new state for the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  // Function to check for the Enter key press
  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSendMessage(inputValue);
      setInputValue(''); // Clear the input field after sending
    }
  };

// Stream text to the UI
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

  
  // Call the checkRunStatus upon load and log the message
  useEffect(() => {
    console.log('The component has mounted');
  
    // Assuming checkRunStatus is a function you want to call
    checkRunStatus();
  
    handleSendMessage('I have questions about Scott Manleys history'); // Send a welcome message
     
  }, []); // Empty dependency array to run only once on mount
  
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
          {/* Sidebar content */}
              <Sidebar />
        </div>

        {/* Main Content Container */}
        <div className={`${isSidebarVisible ? 'ml-1/10' : 'ml-0'} p-8 flex justify-center items-center transition-all duration-300 w-full`}>
          <div className="bg-black text-white max-w-4xl w-full rounded-lg shadow-xl overflow-hidden">
            {/* Header */}
            <header className="p-8 border-b border-gray-600">
              <h1 className="text-4xl font-semibold">Learn more about Scott Manley</h1>
            </header>

            {/* Debug Section */}
            {/* <div className="debug-info" style={{ color: 'white', margin: '20px' }}>
              <h2>Debug Information:</h2>
              <p>Sidebar Visible: {JSON.stringify(isSidebarVisible)}</p>
              <p>Thread ID: {threadId}</p>
              <p>Current Run ID: {currentRunId}</p>
              <p>API URL: {apiUrl}</p>
              <p>Secret Key: {secretKey}</p>
              <p>Assistant ID: {assistantId}</p>
              <p>Conversation: {JSON.stringify(conversation)}</p>
            </div> */}

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {/* Professional Experience */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Professional Experience</h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('Tell us about a challenging project you managed.');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  Tell us about a challenging project you managed.
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('Describe a situation where you had to negotiate a contract.');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  Describe a situation where you had to negotiate a contract.
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('How do you approach product marketing strategy?');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  How do you approach product marketing strategy?
                </a>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Technical Skills</h2>

                {/* Option 1 */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('Discuss your experience with cloud-based technologies.');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  Discuss your experience with cloud-based technologies.
                </a>

                {/* Option 2 */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('How do you stay updated with the latest in software development?');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  How do you stay updated with the latest in software development?
                </a>

                {/* Option 3 */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('Can you provide an example of a cybersecurity challenge you faced?');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  Can you provide an example of a cybersecurity challenge you faced?
                </a>
              </div>

              {/* Personal Attributes */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Personal Attributes</h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('How do you handle stress and tight deadlines?');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  How do you handle stress and tight deadlines?
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('Describe a time you had to lead a team under pressure.');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  Describe a time you had to lead a team under pressure.
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage('What motivates you in your professional life?');
                  }}
                  className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  What motivates you in your professional life?
                </a>
              </div>
            </div>

            {/* Loading and Response Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-8">
              {[...conversation].map((msg, index) => {
                let messageText = '';

                // Check if msg.content is a string or an object
                if (typeof msg.content === 'string') {
                  messageText = msg.content;
                } else if (Array.isArray(msg.content) && msg.content[0]?.text?.value) {
                  messageText = msg.content[0].text.value;
                } else {
                  // Debugging: If the message format is unexpected
                  console.error('Unexpected message format:', msg);
                }

                return (
                  <div key={index} className={`message ${msg.role}`}>
                    <span>
                      <b className="message.assistant">{msg.role === 'assistant' ? 'Scott AI' : 'You'}:</b> {messageText}<hr></hr>
                    </span>
                  </div>
                );
              })}
            </div>





            {/* Prompt Section */}

            <div className={`bg-gray-800 ${styles.promptContainer} flex items-center`}>
              <input
                className={`${styles.promptInput} bg-transparent text-white placeholder-gray-400 outline-none`}
                type="text"
                placeholder="Enter a prompt here"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Add the key press handler here
              />
              <button
                className="ml-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-4 py-2 transition"
                type="button"
                onClick={() => {
                  handleSendMessage(inputValue);
                  setInputValue('');
                }}
              >
                Send
              </button>
            </div>




          </div>
        </div>
      </div>
    </>
  );
}
