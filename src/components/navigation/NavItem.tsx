import React from 'react'

interface NavItemProps {
    icon: React.ReactNode,
    label?: string,
    isActive?: boolean,
    href?: string
}

const NavItem = ({ icon, label, isActive = false, href = '#' }: NavItemProps) => {
    const iconClasses = isActive
        ? "bg-blue-main inset-shadow-gray-100 dark:inset-shadow-[#FFFFFF0D] text-white inset-shadow-xs inset-shadow-inner-shadow-white  hover:bg-blue-main/95"
        : "group-hover:bg-icon-bg dark:group-hover:bg-[#EEEEEE1F]"
    return (
        <li className="group">
            <a href={href} className="flex flex-col gap-0.5 text-[#3C4043] dark:text-white justify-center items-center">
                <div className={`px-2 w-full py-2 rounded-3xl flex md:justify-center justify-start items-center gap-2 transition-all ${iconClasses}`}>
                    {icon}
                    <span className={`md:hidden block ${isActive ? "font-semibold" : ""}`}>{label}</span>
                </div>
                <span className={`md:block hidden  ${isActive ? "font-semibold" : ""}`}>{label}</span>
            </a>
        </li>
    )
}

export default NavItem