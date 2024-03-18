import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface SideBar__function { 
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
}