// app/components/Sidebar.tsx
import React from 'react';
import SideBar__content from './SideBar__content';

interface SidebarProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

const SideBar__function: React.FC<SidebarProps> = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <>
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
        <SideBar__content />
        {/* Place your Sidebar content here */}
      </div>
    </>
  );
};

export default SideBar__function;
