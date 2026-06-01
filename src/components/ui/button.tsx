import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'text';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
    danger: 'bg-danger-600 hover:bg-danger-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-600 text-neutral-200',
    text: 'bg-transparent w-fit'
}

const sizes = {
    sm: 'px-3 py-1.5 text-b-s',
    md: 'px-4 py-2 text-b-l',
    lg: 'px-6 py-3 text-b-l',
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`flex items-center gap-1.5 rounded-md transition-colors duration-200 
                ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}