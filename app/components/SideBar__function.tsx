// app/components/SideBar__function.tsx
import React from 'react';
import SideBar__content from './SideBar__content';

interface SidebarProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

const SideBar__function: React.FC<SidebarProps> = ({ isSidebarVisible, toggleSidebar }) => {
  // Conditionally apply Tailwind CSS classes for visibility
  const sidebarClasses = isSidebarVisible ? "w-1/5 bg-black h-full fixed left-0 top-0 bottom-0 transition-width duration-300" : "hidden";

  return (
    <>
      {/* Toggle Icon - always visible for toggling the sidebar */}
      <div className="fixed top-20 left-20 cursor-pointer z-10" onClick={toggleSidebar}>
        <div className="grid grid-cols-3 gap-1 w-8 h-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-300"></div>
          ))}
        </div>
      </div>

      {/* Collapsible Sidebar */}
      <div className={sidebarClasses}>
        <SideBar__content />
      </div>
    </>
  );
};

export default SideBar__function;
