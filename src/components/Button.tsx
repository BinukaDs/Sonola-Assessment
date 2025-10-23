import React from 'react'

const Button = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <button className='bg-blue-main inset-shadow-gray-100 dark:inset-shadow-[#FFFFFF0D] p-3.5 w-full text-white rounded-xl inset-shadow-sm inner-shadow-inner-shadow-white hover:bg-blue-main/95 transition-all' {...props}>
            {children}
        </button>
    )
}

export default Button