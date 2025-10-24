
import { TbHome, TbFolder } from "react-icons/tb";
import { LuPanelsLeftBottom, LuSettings } from "react-icons/lu";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import User from '../../assets/images/user.png'
import { LuMessageCircleQuestion } from "react-icons/lu";
import NavItem from "./NavItem";
import Searchbar from "../Searchbar";
import { useSidebar } from "../../context/Sidebar/UseSidebar";



const SideBar = () => {
    const { isOpen, closeSidebar } = useSidebar();

    const navItems = [
        { id: 'home', icon: <TbHome className="text-2xl" />, label: 'Home', href: '#', isActive: true },
        { id: 'projects', icon: <TbFolder className="text-2xl" />, label: 'Projects', href: '#', isActive: false },
        { id: 'templates', icon: <LuPanelsLeftBottom className="text-2xl" />, label: 'Templates', href: '#', isActive: false },
        { id: 'uploads', icon: <RiUploadCloud2Line className="text-2xl" />, label: 'Uploads', href: '#', isActive: false },
        { id: 'more', icon: <IoIosMore className="text-2xl" />, label: 'More', href: '#', isActive: false },
    ]


    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={closeSidebar}
                />
            )}
            <aside className={`
                fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                w-64 md:w-24
            `}>
                <div className='h-full flex flex-col justify-between pt-12 px-5 py-4 overflow-y-auto dark:bg-black bg-gray-50 '>
                    <div className="flex flex-col gap-2">
                        {isOpen && <Searchbar />}
                        <ul className='space-y-4  text-gray-600 dark:text-gray-100 text-xs'>
                            {navItems.map((item) => (
                                <NavItem
                                    key={item.id}
                                    href={item.href}
                                    label={item.label}
                                    icon={item.icon}
                                    isActive={item.isActive}
                                />
                            ))}
                        </ul>

                    </div>
                    <ul className="space-y-4 flex flex-col justify-start items-start md:items-center  text-gray-600 dark:text-gray-100 text-xs">
                        <li>
                            <a href="#" className="flex flex-col justify-center items-center">
                                <LuMessageCircleQuestion className="text-xl  dark:hover:text-gray-400 hover:text-gray-800 transition-all" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col justify-center items-center">
                                <LuSettings className="text-xl   dark:hover:text-gray-400 hover:text-gray-800  transition-all" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col justify-center items-center">
                                <img src={User} alt="User" />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar