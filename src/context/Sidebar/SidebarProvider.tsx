import { useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen)
    const closeSidebar = () => setIsOpen(false)
    const openSidebar = () => setIsOpen(true)
    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar, openSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}