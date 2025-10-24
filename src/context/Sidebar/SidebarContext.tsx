import { createContext } from 'react'


interface SidebarContextTypes {
    isOpen: boolean
    toggleSidebar: () => void
    closeSidebar: () => void
    openSidebar: () => void
}
export const SidebarContext = createContext<SidebarContextTypes>({
    isOpen: false,
    toggleSidebar: () => {},
    closeSidebar: () => {},
    openSidebar: () => {},
})




