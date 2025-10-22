import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className='bg-blue-main inset-shadow-gray-100 p-3.5 w-full text-white rounded-xl inset-shadow-sm inner-shadow-inner-shadow-white hover:bg-blue-main/95 transition-all'>
            {children}
        </button>
    )
}

export default Button