import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'outlined' | 'purple'
    fullWidth?: boolean
}

const Button = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }: ButtonProps) => {

    const commonClasses = 'flex cursor-pointer justify-center items-center transition-all focus:outline-none focus:ring-1 focus:ring-offset-2'


    const variants = {
        primary: 'bg-blue-main inset-shadow-gray-100 dark:inset-shadow-[#FFFFFF0D] p-3.5 text-white rounded-xl inset-shadow-sm inset-shadow-neutral-50 dark:inset-shadow-neutral-400 hover:bg-blue-main/95',
        outlined: 'bg-transparent dark:bg-white border border-[#D1D1D1] hover:bg-black hover:text-white dark:border-white rounded-3xl py-2 px-5 gap-1',
        purple: 'purple-gradient-btn inset-shadow-[#FFFFFF52] inset-shadow-sm text-white py-3.5 px-7 gap-2 rounded-xl'
    }
    const widthClass = fullWidth ? 'w-full' : 'w-fit';

    const classes = `${commonClasses} ${variants[variant]} ${widthClass} ${className}`


    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button