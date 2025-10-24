import { HiMenuAlt3, HiX } from "react-icons/hi"
import { useSidebar } from "../context/Sidebar/UseSidebar";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle sidebar"
    >
      {isOpen ? (
        <HiX className="w-6 h-6" />
      ) : (
        <HiMenuAlt3 className="w-6 h-6" />
      )}
    </button>
  )
}

export default SidebarToggle