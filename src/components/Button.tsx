import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'outlined' | 'purple' | 'ghost'
    fullWidth?: boolean
}

const Button = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }: ButtonProps) => {

    const commonClasses = 'flex cursor-pointer justify-center items-center transition-all focus:outline-none '


    const variants = {
        primary: 'bg-blue-main inset-shadow-none dark:border dark:border-border-dark dark:inset-shadow-sm dark:drop-shadow-xs dark:drop-shadow-[#FFFFFF52]  dark:inset-shadow-[#FFFFFF52] p-3.5 text-white rounded-xl  hover:bg-blue-main/85',
        outlined: 'bg-transparent dark:bg-white border border-[#D1D1D1] hover:bg-black hover:text-white dark:border-white rounded-3xl py-2 px-5 gap-1',
        purple: 'purple-gradient-btn inset-shadow-[#FFFFFF52] inset-shadow-sm text-white py-3.5 px-7 gap-2 rounded-xl',
        ghost: 'bg-[#F2F2F7] dark:bg-[#EEEEEE1F]  dark:text-yellow-400 text-blue-main hover:bg-slate-200 dark:hover:bg-[#EEEEEE2F] p-2 rounded-xl'
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